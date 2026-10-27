import nltk
from flask import Flask, request, jsonify, session
from flask_cors import CORS
import fitz
import re
import os
import joblib
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords


from nltk.stem import WordNetLemmatizer
from werkzeug.security import generate_password_hash, check_password_hash
from db import db, cursor
app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ["FLASK_SECRET_KEY"]
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

model = joblib.load("resume_classifier.pkl")
tfidf = joblib.load("tfidf_vectorizer.pkl")
stop_words = set(stopwords.words("english"))
lemmatizer = WordNetLemmatizer()

def preprocess_text(text):
  words = nltk.word_tokenize(text)

  words = [
    lemmatizer.lemmatize(word)
    for word in words
    if word.isalpha() and word not in stop_words
  ]
  return " ".join(words)
  
def extract_text_from_pdf(pdf_path):
  text = " "
  doc = fitz.open(pdf_path)
  for page in doc:
    text += page.get_text()

  doc.close()
  return text

@app.route("/")
def home():
  return{
    "message": "AI RESUME ANALYZER BACKEND IS RUNNING"
  }
@app.route("/predict", methods=["POST"])
def predict():
  if "user_id" not in session:
    return jsonify({"error": "Please login first"}), 401
  if "resume" not in request.files:
    return jsonify({"error": "no resume uploaded"}), 400
  file = request.files["resume"]
  file_path = os.path.join("uploads", file.filename)
  file.save(file_path)

  resume_text = extract_text_from_pdf(file_path) 
  print(resume_text)
  cleaned_text = preprocess_text(resume_text)
  vector = tfidf.transform([cleaned_text])
  prediction = model.predict(vector)
  print(prediction)
  predicted_category = str(prediction[0])
  cursor.execute("""INSERT INTO resume_history (user_id, resume_name, resume_path, prediction) VALUES (%s, %s, %s, %s)""",
                 (session["user_id"], 
                  file.filename, 
                  file_path,
                  predicted_category)
                  )
  db.commit()
  return jsonify({
    "prediction": predicted_category
  })
@app.route("/signup", methods=["POST"])
def signup():
  data = request.get_json()

  name = data.get("name")
  email = data.get("email")
  password = data.get("password")

  if not name or not email or not password:
    return jsonify({"message": "ALL FIELDS ARE REQUIRED"}), 400
  cursor.execute("SELECT * FROM users WHERE email = %s",(email,))
  user = cursor.fetchone()

  if user:
    return jsonify({"message": "USER ALREADY EXISTS"}), 400
  hashed_password = generate_password_hash(password)
  cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)" , 
                 (name, email, hashed_password))
  db.commit()
  return jsonify({"message": "Signup successful"}), 201
@app.route("/login", methods=["POST"])
def login():
  data = request.get_json()
  email = data.get("email")
  password = data.get("password")
  if not email or not password:
    return jsonify({"message": "Email and password are required"}),400
  cursor.execute("SELECT id,name, email,password FROM users WHERE email = %s",
                 (email,)
                 ) 
  user = cursor.fetchone()
  if not user:
    return jsonify({"message": "Invalid email or password"}), 401
  user_id, name, user_email, hashed_password = user
  if not check_password_hash(hashed_password,password):
    return jsonify({"message": "Invalid email or password"}), 401
  session["user_id"] = user_id
  return jsonify({
    "message": "login successful",
    "user": {
      "id": user_id,
      "name": name,
      "email": user_email
    }
  }), 200
if __name__ == "__main__" : 
  print("starting flask server....")
  app.run(debug=True)
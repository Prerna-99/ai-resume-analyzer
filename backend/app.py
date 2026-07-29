import nltk
from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz
import re
import os
import joblib
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
app = Flask(__name__)
CORS(app)

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
  return jsonify({
    "prediction": prediction[0]
  })

if __name__ == "__main__" : 
  print("starting flask server....")
  app.run(debug=True)
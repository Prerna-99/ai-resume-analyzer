import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Upload, BarChart3, Briefcase, BookOpen
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const isLoggedIn = true;
  const [showUpload, setShowUpload] = useState(false);
  const handleanalysis = async () => {
    if (!selectedFile) return;

    const formdata = new FormData();
    formdata.append("resume", selectedFile);
    
  const response = await axios.post(
    "http://localhost:5000/predict",
    formdata,
    {withCredentials: true}
  );
  console.log(response.data);
};
  return (
    <div className="min-h-screen bg-gray-900 flex items-center p-8 justify-center flex-col">
      <h1 className="text-4xl font-bold text-white">
        WELCOME BACK
      </h1>
      <p className="mt-2 text-gray-400">
        Analyze your resume and discover better carrer opportunities
      </p>

      <button
      onClick={() => {
        if (!isLoggedIn) {
          navigate("/login");
        } else {
          setShowUpload(!showUpload);
        }
      }}
        className="mt-10 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/50">
        <Upload size={22} />
        UPLOAD RESUME
      </button>
      {showUpload && (
        <div
          id="upload-section"
          className="mt-16 w-full max-w-3xl rounded-3xl border-2 border-dashed border-violet-500/40 bg-white/5 p-10 text-center backdrop-blur-lg">
          <Upload size={50} className="mx-auto mb-5 text-violet-400" />
          <h2 className="text-2xl font-bold text-white">
            Upload Your Resume
          </h2>
          <p className="mt-3 text-gray-400">
            Drag & Drop your PDF resume here
            <br />
            or click the button below
          </p>
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf"
            className="hidden"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button
            onClick={() => {
              if (!isLoggedIn) {
                navigate("/login");
              } else {
                fileInputRef.current.click();
              }
            }}
            className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500">
            Choose File
          </button>
          {selectedFile && (
            <p className="mt-4 text-green-400 font-medium">
              Selected File:{selectedFile.name}
            </p>
          )}

          {selectedFile && (
            <button
              onClick={handleanalysis}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">
              START ANALYSIS
            </button>
          )}
        </div>
      )}

      <div className="mt-10 grid grid-cols-2 gap-6">


        <div className="cursor-pointer rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:shadow-lg hover:shadow-red-500/20">
          <h2 className="text-xl font-semibold text-white">RESUME ANALYSIS</h2>
          <p className="mt-2 text-gray-400">
            upload your latest resume for analysis
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-white"> ATS SCORE</h2>
          <p className="mt-2 text-gray-400">
            view ur ATS compatibility score
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-white">recommended jobs</h2>
          <p className="mt-2 text-gray-400">
            explore jobs matchin ur resume
          </p>
        </div>
        <div className="rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-white">recommended courses </h2>
          <p className="mt-2 text-gray-400">
            improve ur skills with AI suggestions
          </p>

        </div>
      </div>

    </div>
  );
}
export default Dashboard;

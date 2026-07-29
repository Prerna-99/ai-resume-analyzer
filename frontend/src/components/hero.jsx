import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, Sparkles, BarChart3, Briefcase, ShieldCheck, Brain, Target } from "lucide-react";

function Hero() {
  const[selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const isLoggedIn = true;
  return (
    <div className=" relative z-10 mt-40 flex flex-col items-center px-10 py-6">
      <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm flex items-center gap-5 font-medium text-violet-300 backdrop-blur-lg ">
        <div className="flex items-center gap-2">
          <Sparkles size={16} />
          <span>AI Powered</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 size={16} />
          <span>ATS Analysis</span>
        </div>

        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>Career Insights</span>
        </div>

      </div>
      <h1 className="text-6xl font-extrabold text-green-300 text-center mt-24 " >
        AI RESUME ANALYZER
        <br />
        <span className="text-green-500">with AI</span>
      </h1>
      <p className="mt-6 text-xl leading-8 max-w-2xl text-gray-400 text-center">
        Analyze your resume with AI and get instant ATS score,
        personalized feedback, and job recommendations.
      </p>

      <div className="mt-16 grid grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="rounded-2xl border border-cyan-800 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105 ">
          <ShieldCheck className="mb-4 text-cyan-400" size={32} />
          <h3 className="text-4xl font-bold text-cyan-400">95%</h3>
          <p className="mt-2 text-gray-300">ATS Score</p></div>

        <div className="rounded-2xl border border-green-500/40 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105">
          <Target className="mb-4 text-green-400" size={32} />
          <h3 className="text-4xl font-bold text-green-400">89%</h3>
          <p className="mt-2 text-gray-300">Skills Match</p>
        </div>


        <div className="rounded-2xl border border-yellow-800 bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:scale-105">
          <Brain className="mb-4 text-pink-400 " size={32} />
          <h3 className="text-4xl font-bold text-yellow-400">AI</h3>
          <p className="mt-2 text-gray-300">Smart Insights</p>
        </div>
      </div>
      </div>
      );
}
export default Hero;
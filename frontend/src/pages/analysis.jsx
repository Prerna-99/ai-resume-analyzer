
import{useLocation} from "react-router-dom";

function Analysis(){
const location = useLocation();
const file = location.state?.file;

  return(
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white">
        RESUME ANALYSIS REPORT
      </h1>
      <p className="mt-2 text-gray-400">
        Here is your AI-Powered resume analysis
      </p>
      <div className="mt-8 rounded-2xl border border-violet-500/30 bg-white/5 p-6 backdrop-blur-lg">
      <h2 className="text-2xl font-semibold text-white">
        uploaded resume
      </h2>
      <p className="mt-4 text-gray-300">
        {file ? file.name : " NO RESUME SELECTED"}
      </p>
      <p className="mt-2 text-green-400 font-medium">
        ready for analysis
      </p>
      </div>
      <div className="mt-6 rounded-2xl border border-cyan-50/30 bg-white/5 p-6 backdrop-blur-lg text-center">
      <h2 className="text-2xl font-semibold text-white">
        ATS Score</h2>
        <div className="mt-4 text-6xl font-bold text-cyan-400">
          86%
        </div>
        <p className="mt-2 text-green-400 font-medium">
          Excellent Resume
        </p>
        <p className="mt-3 text-gray-400">
          Your resume is well optimized for most ATS systems
        </p>
        </div>
        <div className="mt-6 rounded-2xl border border-green-500/30 bg-white/5 p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-green-400">
          Strengths</h2>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
            <li>Well-structured resume</li>
            <li>strong technical skills</li>
            <li>relevant academic projects</li>
            <li>easy to read formatting</li>
            </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-red-500/30 bg-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-red-400">
              Areas to improve</h2>
              <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
                <li> Add measurable achievements</li>
                <li> Include relevant certifications</li>
                <li> Improve the professional summary</li>
                <li> Add more industry-specific keywords</li>
                </ul>
                </div>
                <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-white/5 p-6 backdrop-blur-lg">
                <h2 className="text-2xl font-semibold text-yellow-400">
                  Missing skills</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300">
                    React</span>
                    <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300">DOCKER</span>
          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300"> GIT</span>
          <span className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300"> Spring Boot</span>

                    </div>

                    </div>

            <div className="mt-6 rounded-2xl border border-blue-500/30 b-white/5 p-6 backdrop-blur-lg">
            <h2 className="text-2xl font-semibold text-blue-400">
              Recommended Jobs</h2>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>Frontend Developer</li>
                <li>java developer</li>
                <li>ai-ml intern</li>
                <li>software engineer intern</li>
              </ul>
              </div>        
      <div className="mt-6 rounded-2xl border border-blue-500/30 b-white/5 p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-blue-400">
          Recommended courses</h2>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li>react.js complete guide</li>
          <li>spring boot fundamentals</li>
          <li>docker for beginners</li>
          <li>git&github masterclass</li>
        </ul>
      </div>
      <div className="mt-6 rounded-2xl border border-pink-500/30 b-white/5 p-6 backdrop-blur-lg">
        <h2 className="text-2xl font-semibold text-pink-400">
          AI sugestions</h2>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li>Frontend Developer</li>
          <li>java developer</li>
          <li>ai-ml intern</li>
          <li>software engineer intern</li> /*change it*/
        </ul>
      </div>
    </div>
  );

}
export default Analysis;
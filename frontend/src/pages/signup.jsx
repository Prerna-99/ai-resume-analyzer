import { useNavigate } from "react-router-dom";

function Signup(){
  const navigate = useNavigate();
  return(
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h1 className="mb-2 text-center text-3xl font-bold text-white">
        create account
        </h1>
        <p className="mb-8 text-center text-gray-400">
          join ai resume analyzer today</p>
        <p className="mt-6 text-center justify-center text-gray-400">
          Already have an account?{""}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold text-violet-400 hover:text-violet-300">
            Login
          </span>
        </p>
          </div>
          
    </div>
  );
}
export default Signup;
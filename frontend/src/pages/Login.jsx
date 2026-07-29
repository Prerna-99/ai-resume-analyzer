import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login button clicked");
    console.log(email);
    console.log(password);
    if (password.length < 8) {
      alert("password must be at least 8 characters");
      return;
    }
    localStorage.setItem("isLoggedIn","true");
    navigate("/dashboard");

  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center ">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-red-400">
          Apka Swagat H!
        </h1>
        <p className="mb-8 text-center text-orange-400">
          Login to continue ur AI RESUME journey
        </p>
        <form onSubmit={handleLogin}>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Ur Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-green-500"
            />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="mt-3 flex justify-end">
              <button
                type="button"
                className="text-sm text-cyan-400 hover:text-violet-300">
                bhul gye password?
              </button>
            </div>

          </div>
          <div className="mt-5 flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-300">
              <input
                type="checkbox"
                className="h-4 w-4 accent-violet-600"
              />
              Remember Me
            </label>

          </div>
          <button
            tupe="submit"
            className="mt-8 w-full rounded-xl bg-gradient-to-r from-green-600 to-pink-600 py-3 text-lg font-semibold text-white shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50">
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer font-semibold text-yellow-400 hover:text-red-300">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Signup succesful !");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Unable to connect to server");

    }
  };


  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-center text-3xl font-bold text-white">
          create account
        </h1>
        <p className="mb-8 text-center text-gray-400">
          join ai resume analyzer today</p>
        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white outline-none" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-violet-500 py-3 font-semibold text-white hover:bg-violet-600">
            Sign UP
          </button>
        </form>
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
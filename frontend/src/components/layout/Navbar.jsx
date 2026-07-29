import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold text-pink-500">Resume AI</h1>

      <button
        onClick={() => navigate("/login")}
        className="bg-violet-600 text-white px-5 py-2 rounded-xl hover:bg-pink-300 transition-all duration-300 backdrop-blur-lg ">GET STARTED</button>
    </nav>
  );

}

export default Navbar;
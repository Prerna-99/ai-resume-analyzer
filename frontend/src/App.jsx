import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import Analysis from "./pages/analysis";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
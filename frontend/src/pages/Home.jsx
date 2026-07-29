import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero";
function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-violet-600/200 blur-3xl"></div>
      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <Navbar />
      <Hero />
    </div>
  );

}
export default Home;
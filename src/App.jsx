import Navbar from "./Navigation";
import Contact from "./Contact";
import Hero from "./Hero";
import "./index.css";
import Founder from "./Founder";

function App() {
  return (
    <div className="App min-w-full min-h-screen dark:bg-slate-800 text-white">
      <Navbar />
      <Contact />
      <Hero />
      <Founder />
    </div>
  );
}

export default App;

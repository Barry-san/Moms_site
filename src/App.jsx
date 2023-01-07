import Navbar from "./Navigation";
import Contact from "./Contact";
import Hero from "./Hero";
import "./index.css";
import Founder from "./Founder";
import Products from "./Products";

function App() {
  return (
    <div className="App max-w-full min-h-screen dark:bg-slate-800 dark:text-white">
      <Navbar />
      <Contact />
      <Hero />
      <Founder />
      <Products />
    </div>
  );
}

export default App;

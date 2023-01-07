import Navbar from "./Navigation";
import Contact from "./Contact";
import Hero from "./Hero";
import "./index.css";
import Founder from "./Founder";
import Products from "./Products";
import Address from "./Address";

function App() {
  return (
    <div className="App max-w-full min-h-screen dark:bg-slate-800 dark:text-white">
      <Navbar />
      <Contact />
      <Hero />
      <Founder />
      <Products />
      <Address />
    </div>
  );
}

export default App;

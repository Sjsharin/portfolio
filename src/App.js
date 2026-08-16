import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project  from "./Project";
import Contract from "./Contract";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contract />
      </main>

      <Footer />
    </div>
  );
}

export default App;
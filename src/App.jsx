import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth bg-gray-50">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

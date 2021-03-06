
import React from "react";
import './App.css';
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="flex flex-col text-gray-400 bg-gray-900">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;

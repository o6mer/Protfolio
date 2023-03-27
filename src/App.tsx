import React from "react";
import Navbar from "./general/Navbar";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Footer from "./general/Footer";
import Contact from "./contact/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

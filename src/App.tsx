import React from "react";
import Navbar from "./general/Navbar";
import Hero from "./hero/Hero";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;

import React from "react";
import Navbar from "./components/general/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/general/Footer";
import { Divider } from "@mui/material";
import About from "./components/about/About";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Divider />
      <Footer />
    </main>
  );
}

export default App;

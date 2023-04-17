import React from "react";
import Navbar from "./components/general/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/general/Footer";
import { Divider } from "@mui/material";
import About from "./components/about/About";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <main>
      <Navbar />
      <Fade triggerOnce>
        <Hero />
        <Divider />
      </Fade>
      <About />
      <Divider />
      <Fade triggerOnce>
        <Skills />
        <Divider />
      </Fade>
      <Projects />
      <Divider />
      <Fade triggerOnce>
        <Contact />
        <Divider />
      </Fade>
      <Footer />
    </main>
  );
}

export default App;

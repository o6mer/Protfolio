import Navbar from "./components/general/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { Divider } from "@mui/material";
import About from "./components/about/About";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <main>
      <Navbar />
      <Fade>
        <Hero />
        <Divider />
      </Fade>
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Fade>
        <Contact />
        <Divider />
      </Fade>
    </main>
  );
}

export default App;

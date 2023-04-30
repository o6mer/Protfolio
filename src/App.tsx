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
      <Fade triggerOnce duration={2000}>
        <Hero />
        <Divider />
      </Fade>
      <About />
      <Divider />
      <Fade triggerOnce duration={2000}>
        <Skills />
        <Divider />
      </Fade>
      <Projects />
      <Divider />
      <Fade triggerOnce duration={2000}>
        <Contact />
        <Divider />
      </Fade>
    </main>
  );
}

export default App;

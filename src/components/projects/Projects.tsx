import React from "react";
import SectionContainer from "../general/SectionContainer";
import snowbound from "../../assets/snowbound.png";
import helpster1 from "../../assets/helpster-2.png";
import helpster2 from "../../assets/helpster-1.png";
import heads1 from "../../assets/heads-1.png";
import heads2 from "../../assets/heads-2.png";
import ProjectItem from "./components/ProjectItem";

const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="flex flex-col gap-16">
        <ProjectItem
          title="Snowbound"
          description="Ski resort oriented web stite. Plan your next ski vaction and compare the best ski resorts. This project was created as a Full-Stack cours final proejct and developed by me and 3 other developers. "
          github="https://github.com/o6mer/snowbound"
          liveUrl="https://snowbound.netlify.app"
          image={snowbound}
          skills={["react", "node", "postsql", "tailwind"]}
        />
        <ProjectItem
          title="Helpster"
          description="Costumer serviece platform and an intgrated chat bot. "
          github="https://github.com/o6mer/helpster-frontend"
          liveUrl="https://helpster-bot.netlify.app"
          image={[helpster1, helpster2]}
          skills={["react", "node", "mongo", "tailwind"]}
          reversed
        />
        <ProjectItem
          title="Talking Heads"
          description="Costumer serviece and intgrated chat bot platform."
          github="https://github.com/o6mer/talking-heads"
          liveUrl="https://talking-heads.netlify.app"
          image={[heads1, heads2]}
          skills={["react", "node", "mongo", "socket"]}
        />
      </div>
    </SectionContainer>
  );
};

export default Projects;

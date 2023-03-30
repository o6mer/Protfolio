import React from "react";
import SectionContainer from "../general/SectionContainer";
import snowbound from "../../assets/snowbound.png";
import ProjectItem from "./components/ProjectItem";

const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="flex flex-col gap-16">
        <ProjectItem
          title="snowbound"
          description="skie resort oriented web stite. plan your next ski vaction and compare the best ski resorts"
          github=""
          liveUrl=""
          image={snowbound}
          skills={["react", "node", "postsql", "tailwind"]}
        />
        <ProjectItem
          title="snowbound"
          description="skie resort oriented web stite. plan your next ski vaction and compare the best ski resorts"
          github=""
          liveUrl=""
          image={snowbound}
          skills={["react", "node", "postsql", "tailwind"]}
          reversed
        />
        <ProjectItem
          title="snowbound"
          description="skie resort oriented web stite. plan your next ski vaction and compare the best ski resorts"
          github=""
          liveUrl=""
          image={snowbound}
          skills={["react", "node", "postsql", "tailwind"]}
        />
      </div>
    </SectionContainer>
  );
};

export default Projects;

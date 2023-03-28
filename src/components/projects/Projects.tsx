import React from "react";
import SectionContainer from "../general/SectionContainer";
import react from "../../assets/reactIcon.png";
import node from "../../assets/nodeIcon.png";
import mongo from "../../assets/mongodbIcon.png";
import tailwind from "../../assets/tailwindIcon.png";
import LogoContainer from "../general/LogoContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="flex">
        <div className="flex flex-col w-[50%]">
          <h1 className="text-3xl font-bold">Lorem ipsum dolor</h1>
          <p className="mt-2 text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            obcaecati sequi nobis cum exercitationem quam?
          </p>
          <div className="w-[50%] mt-4 grid grid-cols-4 items-stretch">
            <LogoContainer title="React.js" image={react} />
            <LogoContainer title="Node.js" image={node} />
            <LogoContainer title="MongoDB" image={mongo} />
            <LogoContainer title="TailwindCSS" image={tailwind} />
          </div>
          <div className="flex">
            <a target="_blank" href="">
              <GitHubIcon />
            </a>
            <a target="_blank" href="">
              <LaunchIcon />
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </SectionContainer>
  );
};

export default Projects;

import React from "react";
import css from "../../assets/cssIcon.png";
import html from "../../assets/htmlIcon.png";
import js from "../../assets/javascriptIcon.png";
import ts from "../../assets/typescriptIcon.png";
import react from "../../assets/reactIcon.png";
import node from "../../assets/nodeIcon.png";
import mongo from "../../assets/mongodbIcon.png";
import postsql from "../../assets/postgresqlIcon.png";
import tailwind from "../../assets/tailwindIcon.png";
import jquery from "../../assets/jqueryIcon.png";
import redux from "../../assets/redux.png";
import SectionContainer from "../general/SectionContainer";
import LogoContainer from "../general/LogoContainer";

const images = [
  { image: css, title: "CSS3" },
  { image: html, title: "html5" },
  { image: ts, title: "TypeScript" },
  { image: js, title: "JavaScript" },
  { image: react, title: "React.js" },
  { image: node, title: "Node.js" },
  { image: mongo, title: "MongoDB" },
  { image: postsql, title: "PostgreSQL" },
  { image: tailwind, title: "TailwindCSS" },
  { image: jquery, title: "JQuery" },
  { image: redux, title: "Redux" },
];

const Skills = () => {
  return (
    <SectionContainer
      id="skills"
      bgColor="primary"
      title="Languages and Frameworks"
    >
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-5 items-stretch grid-rows-1 content-start  gap-4">
          {images.map((image) => (
            <LogoContainer key={image.image} {...image} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;

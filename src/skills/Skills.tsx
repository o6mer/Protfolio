import React from "react";
import css from "../assets/cssIcon.png";
import html from "../assets/htmlIcon.png";
import js from "../assets/javascriptIcon.png";
import ts from "../assets/typescriptIcon.png";
import react from "../assets/reactIcon.png";
import node from "../assets/nodeIcon.png";
import mongo from "../assets/mongodbIcon.png";
import postsql from "../assets/postgresqlIcon.png";
import tailwind from "../assets/tailwindIcon.png";
import jquery from "../assets/jqueryIcon.png";

const images = [
  css,
  html,
  ts,
  js,
  react,
  node,
  mongo,
  postsql,
  tailwind,
  jquery,
];

const Skills = () => {
  return (
    <section id="skills" className="flex flex-col items-center py-24 ">
      <header className="text-3xl font-bold">Languages and Frameworks:</header>
      <div className="max-w-5xl mt-8 w-full grid grid-cols-5  items-center h-min ">
        {images.map((image) => (
          <SkillsItem image={image} />
        ))}
      </div>
    </section>
  );
};

const SkillsItem = ({ image }: { image: string }) => {
  return (
    <div className="w-40 hover:scale-[1.02] transition-all hover:rotate-1">
      <img src={image} alt="" className="object-cover" />
    </div>
  );
};

export default Skills;

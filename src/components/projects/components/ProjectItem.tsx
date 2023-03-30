import React from "react";
import LogoContainer, { TSkillName } from "../../general/LogoContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  skills: TSkillName[];
  image: string;
  github: string;
  liveUrl: string;
  reversed?: boolean;
}

const ProjectItem = ({
  title,
  description,
  skills,
  image,
  github,
  liveUrl,
  reversed,
}: Props) => {
  return (
    <div
      className={`flex items-stretch justify-between gap-8 ${
        reversed && "flex-row-reverse"
      }`}
    >
      <div className="flex w-[50%] flex-col justify-around">
        <div>
          <Link to={`/project/${title}`}>
            <h1 className="text-3xl hover:text-slate-700 font-bold underline  transition-all">
              {title}
            </h1>
          </Link>
          <p className="mt-2 text-xl">{description}</p>
        </div>
        <div className="w-[50%] mt-4 grid grid-cols-4 items-stretch">
          {skills.map((skill) => (
            <LogoContainer name={skill} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[50%] ">
        <img className="shadow-lg" src={image} alt="" />
        <div className="flex mt-4">
          <a
            className={`${
              !reversed && "ml-auto"
            } hover:text-slate-700 transition-all`}
            target="_blank"
            href={github}
          >
            <GitHubIcon />
          </a>
          <a
            className="hover:text-slate-700 transition-all"
            target="_blank"
            href={liveUrl}
          >
            <LaunchIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

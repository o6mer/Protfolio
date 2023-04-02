import React from "react";
import LogoContainer, { TSkillName } from "../../general/LogoContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

interface Props {
  title: string;
  description: string;
  skills: TSkillName[];
  image: string | string[];
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
      className={`flex justify-between items-stretch gap-8 h-min ${
        reversed && "flex-row-reverse"
      }`}
    >
      <div className="flex w-[50%] flex-col justify-around h-min">
        <div>
          <Link to={`/project/${title}`}>
            <h1 className="text-3xl hover:text-slate-700 font-bold underline  transition-all">
              {title}
            </h1>
          </Link>
          <p className="mt-2 text-xl">{description}</p>
        </div>
        <div className="w-[50%] h-min mt-4 grid grid-cols-4 gap-2 ">
          {skills.map((skill) => (
            <LogoContainer name={skill} />
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[50%] ">
        {typeof image === "string" ? (
          <Zoom>
            <img className="shadow-lg" src={image} alt="" />
          </Zoom>
        ) : (
          <Carousel swipeable infiniteLoop>
            {image.map((img) => (
              <Zoom children={<img src={img} />} />
            ))}
          </Carousel>
        )}
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

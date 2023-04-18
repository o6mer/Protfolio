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
          description="Ski vacation planing tool. The wweb site is for those who want to plan their nex ski vaction on their own. You can see the highest rated ski resorts around the globe, compare between them and find every think you need to know about them."
          github="https://github.com/o6mer/snowbound"
          liveUrl="https://snowbound.netlify.app"
          image={snowbound}
          skills={["react", "node", "postsql", "tailwind"]}
        />
        <ProjectItem
          title="Helpster"
          description="Helpser is a Costumer serviece platform. The platform got 2 sides. The first one is a integrated chat-bot that can answer FAQ about your servieces. Also, if needed, can be used as a chat with a representetive. The other side is a platform to manage your incoming rquests, close ot reopen old requests, manage the chat-bot flow and many more quality of life features."
          github="https://github.com/o6mer/helpster-frontend"
          liveUrl="https://helpster-bot.netlify.app"
          image={[helpster1, helpster2]}
          skills={["react", "node", "mongo", "tailwind"]}
          reversed
        />
        <ProjectItem
          title="Talking Heads"
          description="Talking Head is an online chat-room messeging platform. You can login in to your personal account, find a room you would like to chat in and talk with anybody. Also you can open your own room, personalize it as you like and let people join."
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

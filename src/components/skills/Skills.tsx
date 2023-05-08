import SectionContainer from "../general/SectionContainer";
import LogoContainer from "../general/LogoContainer";
import { icons } from "../../utils/icons";

const Skills = () => {
  return (
    <SectionContainer
      id="skills"
      bgColor="primary"
      title="Languages and Frameworks"
    >
      <div className="md:grid md:grid-cols-3 flex flex-col  gap-6 w-full  h-min">
        <div className="border-fourth border-4 p-8 rounded-2xl">
          <header className="text-4xl text-center mb-8 font-bold">
            Frontend
          </header>
          <div className="grid grid-cols-2 h-min gap-4">
            <LogoContainer name="js" />
            <LogoContainer name="ts" />
            <LogoContainer name="react" />
            <LogoContainer name="redux" />
            <LogoContainer name="html" />
            <LogoContainer name="css" />
            <LogoContainer name="tailwind" />
            <LogoContainer name="jquery" />
          </div>
        </div>
        <div className="border-fourth border-4 p-8 rounded-2xl">
          <header className="text-4xl text-center mb-8 font-bold">
            Backend
          </header>
          <div className="grid grid-cols-2 h-min gap-4">
            <LogoContainer name="node" />
            <LogoContainer name="python" />
            <LogoContainer name="socket" />
            <LogoContainer name="express" />
            <LogoContainer name="mongo" />
            <LogoContainer name="postsql" />
          </div>
        </div>
        <div className="border-fourth border-4 p-8 rounded-2xl">
          <header className="text-4xl text-center mb-8 font-bold">CI/CD</header>
          <div className="grid grid-cols-2 h-min gap-4">
            <LogoContainer name="git" />
            <LogoContainer name="docker" />
            <LogoContainer name="aws" />
          </div>
        </div>
      </div>

      {/* <div className="w-full flex flex-wrap items-stretch  gap-4">
        
        {Object.keys(icons).map((name: any) => (
          <div className="md:w-[10vw] w-[25vw]" key={name}>
            <LogoContainer name={name} />
          </div>
        ))}
      </div> */}
    </SectionContainer>
  );
};

export default Skills;

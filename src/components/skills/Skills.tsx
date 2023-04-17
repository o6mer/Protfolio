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
      <div className="h-full flex flex-col items-center">
        <div className="w-full grid grid-cols-5 items-stretch  gap-4">
          {Object.keys(icons).map((name: any) => (
            <LogoContainer name={name} key={name} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;

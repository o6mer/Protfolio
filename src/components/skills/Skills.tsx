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
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-5 items-stretch grid-rows-1 content-start  gap-4">
          {Object.keys(icons).map((name: any) => (
            <LogoContainer name={name} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Skills;

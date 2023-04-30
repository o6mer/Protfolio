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
      <div className="w-full flex flex-wrap items-stretch  gap-4">
        {Object.keys(icons).map((name: any) => (
          <div className="w-[10vw]" key={name}>
            <LogoContainer name={name} />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Skills;

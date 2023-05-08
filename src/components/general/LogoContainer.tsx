import { Tooltip } from "@mui/material";
import { icons } from "../../utils/icons";

export type TSkillName = keyof typeof icons;

interface Props {
  name: TSkillName;
}

const LogoContainer = ({ name }: Props) => {
  return (
    <Tooltip title={icons[name].title} arrow placement="top">
      <div className="w-full full flex items-center justify-center relative hover:scale-[1.02] transition-all hover:rotate-1  bg-fourth rounded-full p-2">
        <img
          src={icons[name].image}
          alt=""
          className="h-full max-h-[70%] aspect-square object-contain "
        />
      </div>
    </Tooltip>
  );
};

export default LogoContainer;

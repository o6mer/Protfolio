import { Tooltip } from "@mui/material";
import React from "react";
import { icons } from "../../utils/icons";

export type TSkillName = keyof typeof icons;

interface Props {
  name: TSkillName;
}

const LogoContainer = ({ name }: Props) => {
  return (
    <Tooltip title={icons[name].title} arrow placement="top">
      <div className="w-full hover:scale-[1.02] transition-all hover:rotate-1 flex items-center">
        <img src={icons[name].image} alt="" className="object-cover" />
      </div>
    </Tooltip>
  );
};

export default LogoContainer;

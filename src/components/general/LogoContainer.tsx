import { Tooltip } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  image: string;
}

const LogoContainer = ({ title, image }: Props) => {
  return (
    <Tooltip title={title} arrow placement="top">
      <div className="w-full hover:scale-[1.02] transition-all hover:rotate-1 flex items-center">
        <img src={image} alt="" className="object-cover" />
      </div>
    </Tooltip>
  );
};

export default LogoContainer;

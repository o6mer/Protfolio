import React from "react";

interface Props {
  id?: string;
  bgColor?: string;
  title?: string;
  children: React.ReactNode;
}

const SectionContainer = ({ id, children, title, bgColor }: Props) => {
  return (
    <section
      id={id}
      className={`flex flex-col items-center py-24 px-6 md:px-0 ${
        bgColor === "primary" && "bg-primary"
      }`}
    >
      <header className="text-3xl font-bold  text-center mb-4">{title}</header>
      <div className="max-w-5xl w-full mt-8 ">{children}</div>
    </section>
  );
};

export default SectionContainer;

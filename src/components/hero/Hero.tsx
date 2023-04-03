import React from "react";
import heroImage from "../../assets/hero-image.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[95vh]  flex items-center justify-center"
    >
      <div className="flex justify-between w-full  items-center h-full  max-w-5xl">
        <div className="flex flex-col  ">
          <TypeAnimation
            className="text-6xl"
            style={{ whiteSpace: "pre-line" }}
            sequence={[
              `Hi, I'm Omer Liraz👋 \n Full-Stack Developer`, // Types 'One'
              4000, // Waits 1s
              "Hi, I'm Omer Liraz👋 \n Front-End Developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Hi, I'm Omer Liraz👋 \n Back-End Developer",
              2000, // Types 'Three' without deleting 'Two'
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <img
          className="rounded-3xl opacity-80 filter hero-image "
          src={heroImage}
          alt="heroImage"
        />
      </div>
    </section>
  );
};

export default Hero;

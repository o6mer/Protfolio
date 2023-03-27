import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section id="hero" className="h-[95vh] bg-gray-800 flex justify-center">
      <div className="grid grid-cols-2 items-center h-full w-full max-w-5xl">
        <div className="flex flex-col gap-8">
          <h2 className="text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consectetur nesciunt voluptate unde quae suscipit rerum dolore
            voluptatum sit nisi.
          </p>
        </div>
        <div>
          <img
            className="rounded-3xl opacity-80 filter shadow-[0_0_20px_20px_#202837]"
            src={heroImage}
            alt="heroImage"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

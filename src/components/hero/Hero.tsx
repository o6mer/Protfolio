import React from "react";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[95vh]  flex items-center justify-center"
    >
      <div className="flex justify-between w-full  items-center h-full  max-w-5xl">
        <div className="flex flex-col gap-8 w-[50%]">
          <h2 className="text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="text-4xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            consectetur nesciunt voluptate unde quae suscipit rerum dolore
            voluptatum sit nisi.
          </p>
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

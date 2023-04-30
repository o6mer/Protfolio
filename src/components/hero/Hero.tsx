import heroImage from "../../assets/hero-image.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-[95vh]  flex items-center justify-center px-4 md:px-0"
    >
      <div className="flex justify-center md:justify-between w-full  items-center h-full  max-w-5xl">
        <div className="flex flex-col  ">
          <TypeAnimation
            className="text-6xl"
            style={{ whiteSpace: "pre-line" }}
            sequence={[
              `Hi, I'm Omer Liraz👋 \n Full-Stack Developer`,
              4000,
              "Hi, I'm Omer Liraz👋 \n Front-End Developer",
              2000,
              "Hi, I'm Omer Liraz👋 \n Back-End Developer",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <img
          className="md:block hidden rounded-3xl opacity-80 filter hero-image "
          src={heroImage}
          alt="heroImage"
        />
      </div>
    </section>
  );
};

export default Hero;

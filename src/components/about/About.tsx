import SectionContainer from "../general/SectionContainer";
import backgroundPic from "../../assets/about/background.svg";
import educationnPic from "../../assets/about/education.svg";
import plansPic from "../../assets/about/plans.svg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="gap-2 flex flex-col text-xl">
        <div className="flex flex-col gap-4">
          <Fade triggerOnce>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col gap-2 ">
                <StyledHeader title="Background" />
                <p>
                  Hello, my name is Omer Liraz and I am a passionate Full-Stack
                  developer based in <strong> Rishon LeZion, Israel</strong>. I
                  enjoy building complex applications with great UI and powerful
                  backends.
                </p>{" "}
                <p>
                  Programming and development, have been a passion of mine all
                  my life. In high school, I took my first computer science
                  lessons and fell in love with the field.
                </p>
              </div>
              <img src={backgroundPic} alt="" className="w-auto md:w-[30%]" />
            </div>
          </Fade>
          <Fade triggerOnce>
            <div className="flex flex-col md:flex-row">
              <img
                src={educationnPic}
                alt=""
                className="hidden md:inline-block w-auto md:w-[30%]"
              />
              <div className="flex flex-col gap-2 ">
                <StyledHeader title="Education and Experience" />
                <p>
                  After my release from the army at the end of 2021, I started
                  to teach myself Full-Stack development. I began with a few
                  Unity courses to learn the basics of the web, and from that
                  point on, I was hooked.
                </p>
                <p>
                  Around 10 months into self-learning and creating projects,I
                  decided that I wanted to take my learning to the next level,
                  learn how to work as part of a team, and practice as much as
                  possible. I enrolled in a Full-Stack course at CyberPro
                  University. The course spanned 700 hours over 4 months.
                </p>
                <p>
                  Throughout my learning journey, I have focused on using good
                  practices and writing clean code. Writing readable and
                  maintainable code has been one of my biggest priorities.
                </p>
              </div>
              <img
                src={educationnPic}
                alt=""
                className="md:hidden inline-block  w-auto md:w-[30%]"
              />
            </div>
          </Fade>
          <Fade triggerOnce>
            <div className="flex flex-col md:flex-row  mt-4">
              <div className="flex flex-col gap-2 ">
                <StyledHeader title="Plans" />
                <p>
                  Now, I am seeking my first professional position as a
                  Full-Stack developer. <br /> My goals are to learn as much as
                  possible, prove my knowledge and skills, and make a
                  significant impact on a real-life product.
                </p>
              </div>
              <img src={plansPic} alt="" className="w-auto md:w-[30%]" />
            </div>
          </Fade>
          <div className="flex flex-col gap-2 "></div>
        </div>
      </div>
    </SectionContainer>
  );
};

interface Props {
  title: string;
}

const StyledHeader = ({ title }: Props) => {
  return (
    <div
      className="flex justify-center items-center 
          mt-4"
    >
      <div className="h-[1px] bg-slate-50 grow"></div>
      <h2 className="font-bold text-2xl px-4">{title}</h2>
      <div className="h-[1px] bg-slate-50 grow"></div>
    </div>
  );
};

export default About;

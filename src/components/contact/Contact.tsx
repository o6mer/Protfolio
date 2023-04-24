import React, { useState } from "react";
import SectionContainer from "../general/SectionContainer";
import StyledInput from "./components/StyledInput";
import cv from "../../assets/omer-liraz-cv.pdf";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(email, name, message, subject);
  };

  return (
    <SectionContainer bgColor="primary" title="Contact Me" id="contact">
      <div className="flex flex-col gap-10 ">
        <div className="flex justify-evenly items-center text-xl">
          <a
            className="font-bold underline-animation flex"
            href={cv}
            download={cv}
          >
            My C.V
            <UploadFileIcon />
          </a>
          <a
            className=" font-bold underline-animation"
            href="https://github.com/o6mer"
            target="_blank"
          >
            Github
            <GitHubIcon />
          </a>
          <a
            className=" font-bold underline-animation"
            href="https://www.linkedin.com/in/omer-liraz/"
            target="_blank"
          >
            Linked
            <LinkedInIcon />
          </a>
          <a
            className=" font-bold underline-animation"
            href="mailto: o6merliraz@gmail.com"
          >
            Email
            <EmailIcon />
          </a>
        </div>
        <form action="" onSubmit={submitHandler}>
          <div className="flex flex-col items-center gap-4 ">
            <header className="text-center text-xl">Send me a messge</header>
            <div className="w-full grid grid-cols-2 gap-4">
              <StyledInput
                placeholder="Name"
                type="text"
                state={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <StyledInput
                placeholder="Email"
                type="email"
                state={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            <StyledInput
              placeholder="Subject"
              type="text"
              state={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
            <StyledInput
              placeholder="Message"
              type="text"
              state={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              isTextarea
            />
            <button className="w-fit bg-third hover:bg-fourth transition-all font-bold px-4 py-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};

export default Contact;

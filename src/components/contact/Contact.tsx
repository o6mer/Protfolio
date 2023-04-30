import React, { useState, useRef } from "react";
import SectionContainer from "../general/SectionContainer";
import StyledInput from "./components/StyledInput";
import cv from "../../assets/omer-liraz-cv.pdf";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const clearForm = () => {
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name || !subject || !message) return;

    try {
      setIsLoading(true);
      await emailjs.sendForm(
        "service_9k2w6qe",
        "template_v62zd8q",
        formRef.current || "",
        "2k_qLRLw9cAVS12rt"
      );
      setIsLoading(false);
      setIsAlertOpen(true);
      clearForm();
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <SectionContainer bgColor="primary" title="Contact Me" id="contact">
      <div className="flex flex-col gap-10 ">
        <div className="flex  flex-wrap gap-4 md:gap-0 justify-evenly items-center text-xl">
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
        <form ref={formRef} action="" onSubmit={submitHandler}>
          <div className="flex flex-col items-center gap-4 ">
            <header className="text-center text-xl">Send me a messge</header>
            <div className="w-full grid grid-cols-2 gap-4">
              <StyledInput
                name="user_name"
                placeholder="Name"
                type="text"
                state={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <StyledInput
                name="user_email"
                placeholder="Email"
                type="email"
                state={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>

            <StyledInput
              name="subject"
              placeholder="Subject"
              type="text"
              state={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
            <StyledInput
              name="message"
              placeholder="Message"
              type="text"
              state={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              isTextarea
            />
            <button
              type="submit"
              className="w-fit bg-third hover:bg-fourth transition-all font-bold px-4 py-2"
              disabled={isLoading}
            >
              {isLoading ? "sending..." : "send"}
            </button>
          </div>
        </form>
      </div>

      <Fade
        in={isAlertOpen}
        onEnter={() => setTimeout(() => setIsAlertOpen(false), 3000)}
        className="fixed bottom-5 left-5"
      >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: "fit-content" }}
        >
          Message Sent!
        </Alert>
      </Fade>
    </SectionContainer>
  );
};

export default Contact;

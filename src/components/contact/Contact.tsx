import React, { useState } from "react";
import SectionContainer from "../general/SectionContainer";
import StyledInput from "./components/StyledInput";

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
    <SectionContainer bgColor="primary" title="Contact Me">
      <form action="" onSubmit={submitHandler}>
        <div className="flex flex-col items-center gap-4 ">
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
          <button className="w-fit bg-secondary hover:bg-third transition-all font-bold px-4 py-2">
            Send
          </button>
        </div>
      </form>
    </SectionContainer>
  );
};

export default Contact;

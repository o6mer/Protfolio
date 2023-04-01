import React, { useState } from "react";

interface Props {
  type: string;
  placeholder: string;
  state: string | number;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
}

const StyledInput = ({
  type,
  placeholder,
  state,
  onChange,
  isTextarea,
}: Props) => {
  const [active, setActive] = useState(false);

  return (
    <>
      {isTextarea ? (
        <textarea
          required
          onChange={onChange}
          value={state}
          placeholder={placeholder}
          className={`resize-none w-full appearance-none p-2 outline-none underline-animation transition-all ${
            active && "active"
          }`}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
        />
      ) : (
        <input
          required
          placeholder={placeholder}
          type={type}
          className={`appearance-none w-full p-2 outline-none underline-animation transition-all ${
            active && "active"
          }`}
          onBlur={() => setActive(false)}
          onFocus={() => setActive(true)}
          value={state}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default StyledInput;

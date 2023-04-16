import React, { useState, useEffect } from "react";

interface Props {
  href: string;
  title: string;
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 60
        ? setStickyClass("fixed top-0 left-0 z-50 popin")
        : setStickyClass("relative");
    }
  };

  const LinkItem = ({ href, title }: Props) => {
    return (
      <a
        href={href}
        className={`px-1 transition-all underline-animation ${
          active === title && "active"
        }`}
        onClick={() => setActive(title)}
      >
        {title}
      </a>
    );
  };

  return (
    <nav
      className={`flex justify-center items-center h-[5vh] transition-all bg-third w-full ${stickyClass} shadow-lg`}
    >
      <div className="flex w-full max-w-5xl text-xl justify-between py-4">
        <div>
          <LinkItem href="#" title="Omer" />
        </div>
        <div className="flex gap-4">
          <LinkItem href="#about" title="About" />
          <LinkItem href="#skills" title="Skills" />
          <LinkItem href="#projects" title="Projects" />
          <LinkItem href="#contact" title="Contact Me" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

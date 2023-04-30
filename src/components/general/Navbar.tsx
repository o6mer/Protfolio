import { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  href: string;
  title: string;
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [stickyClass, setStickyClass] = useState("relative");
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        onClick={() => {
          setActive(title);
          setDrawerOpen(false);
        }}
      >
        {title}
      </a>
    );
  };

  const links = () => (
    <>
      <LinkItem href="#about" title="About" />
      <LinkItem href="#skills" title="Skills" />
      <LinkItem href="#projects" title="Projects" />
      <LinkItem href="#contact" title="Contact Me" />
    </>
  );

  return (
    <nav
      className={`flex justify-center items-center h-[5vh] transition-all bg-third w-full ${stickyClass} shadow-lg`}
    >
      <div className="md:flex hidden w-full max-w-5xl text-xl justify-between py-4">
        <div>
          <LinkItem href="#" title="Omer" />
        </div>
        <div className="flex gap-4">{links()}</div>
      </div>
      <div className="flex md:hidden w-full px-4">
        <div className="w-full flex justify-between items-center">
          <LinkItem href="#" title="Omer" />

          <button onClick={() => setDrawerOpen(true)} className="ml-auto">
            <MenuIcon />
          </button>
        </div>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <div className="flex flex-col gap-2 text-lg  bg-third text-white p-4">
            {links()}
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;

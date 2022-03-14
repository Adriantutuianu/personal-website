import React from "react";
import { Link } from "react-scroll";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <Link
        activeClass="active"
        to="home-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        Home
      </Link>{" "}
      <Link
        activeClass="active"
        to="about-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        About
      </Link>{" "}
      <Link
        activeClass="active"
        to="projects-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        Projects
      </Link>{" "}
      <Link
        activeClass="active"
        to="contact-section"
        spy={true}
        smooth={true}
        duration={900}
        delay={100}
      >
        Contact
      </Link>{" "}
    </header>
  );
};

export default Header;

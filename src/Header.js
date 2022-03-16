import React from "react";
import { Link } from "react-scroll";
import "./header.scss";

const Header = ({ setTitle }) => {
  const menu = [
    {
      id: 1,
      name: "home-section",
      title: "Home - Adrian Tut",
    },
    {
      id: 2,
      name: "about-section",
      title: "About - Adrian Tut",
    },
    {
      id: 3,
      name: "projects-section",
      title: "Projects - Adrian Tut",
    },
    {
      id: 4,
      name: "contact-section",
      title: "Contact - Adrian Tut",
    },
  ];

  return (
    <header className="header">
      <div className="content-wrap">
        <p className="logo">LOGO</p>
        <nav className="navigation-menu ">
          <Link
            activeClass="active"
            to="home-section"
            spy={true}
            smooth={true}
            duration={900}
            delay={100}
            onClick={() => setTitle("Home - Adrian Tut")}
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
            onClick={() => setTitle("About - Adrian Tut")}
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
            onClick={() => setTitle("Projects - Adrian Tut")}
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
            onClick={() => setTitle("Contact - Adrian Tut")}
          >
            Contact
          </Link>{" "}
        </nav>
      </div>
    </header>
  );
};

export default Header;

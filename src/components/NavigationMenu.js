import React from "react";
import { Link } from "react-scroll";
import "./navigationMenu.scss";

const NavigationMenu = ({ setTitle }) => {
  const menu = [
    {
      id: 1,
      path: "home-section",
      title: "Home - Adrian Tut",
      name: "Home",
    },
    {
      id: 2,
      path: "about-section",
      title: "About - Adrian Tut",
      name: "About",
    },
    {
      id: 3,
      path: "projects-section",
      title: "Projects - Adrian Tut",
      name: "Projects",
    },
    {
      id: 4,
      path: "contact-section",
      title: "Contact - Adrian Tut",
      name: "Contact",
    },
  ];

  const navigationMenu = menu.map((item) => (
    <Link
      key={item.id}
      activeClass="active"
      to={item.path}
      spy={true}
      smooth={true}
      duration={900}
      delay={100}
      onClick={() => setTitle(item.title)}
    >
      {item.name}
    </Link>
  ));

  return <nav className="navigation-menu">{navigationMenu}</nav>;
};

export default NavigationMenu;

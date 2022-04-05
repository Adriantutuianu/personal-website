import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  const projects = [
    {
      name: "Product Management App",
      imageName: "product-management",
      url: "https://product-management-app.adriantut.dev",
    },
    {
      name: "Shopping List",
      imageName: "shopping-list",
      url: "https://shopping-list.adriantut.dev",
    },
    {
      name: "Random Quotes",
      imageName: "random-quotes",
      url: "https://random-quotes.adriantut.dev",
    },
    {
      name: "Forkify App",
      imageName: "forkify-app",

      url: "https://forkify-app.adriantut.dev",
    },
    {
      name: "Html & Css Homepage",
      imageName: "homepage",

      url: "https://html-css-app.adriantut.dev",
    },
    {
      name: "Calculator App",
      imageName: "calculator",

      url: "https://calculator-app.adriantut.dev",
    },
  ];

  const projectsList = projects.map((project, index) => (
    <li
      className={`item item${index}`}
      key={index}
      style={{
        backgroundImage: `url(./project-images/${project.imageName})`,
        backgroundSize: "cover",
      }}
    >
      {project.name}
    </li>
  ));

  return (
    <Element name="projects-section" id="projects" className="section">
      {" "}
      <ul className="projects-grid content-wrap">{projectsList}</ul>
      <ScrollTo
        destination={"contact-section"}
        title={"Contact - Adrian Tut"}
        setTitle={setTitle}
        uniqueKey={12}
      />
    </Element>
  );
};

export default Projects;

import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  const projects = [
    {
      name: "Product Management App",
      url: "https://product-management-app.adriantut.dev",
    },
    {
      name: "Shopping List",
      url: "https://shopping-list.adriantut.dev",
    },
    {
      name: "Random Quotes",
      url: "https://random-quotes.adriantut.dev",
    },
    {
      name: "Forkify App",
      url: "https://forkify-app.adriantut.dev",
    },
    {
      name: "Html & Css Homepage",
      url: "https://html-css-app.adriantut.dev",
    },
    {
      name: "Calculator App",
      url: "https://calculator-app.adriantut.dev",
    },
  ];

  const projectsList = projects.map((project, index) => (
    <li
      className={`item item${index}`}
      key={index}
      style={{
        backgroundImage: "url(./project-images/test.jpg)",
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

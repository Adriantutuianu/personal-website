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
      tags: "React, Ant Design, Fetch API",
      description: "Description Project 1",
    },
    {
      name: "Shopping List",
      imageName: "shopping-list",
      url: "https://shopping-list.adriantut.dev",
      tags: "React, Ant Design",
    },
    {
      name: "Random Quotes",
      imageName: "random-quotes",
      url: "https://random-quotes.adriantut.dev",
      tags: "React, Fetch API",
    },
    {
      name: "Personal Website",
      imageName: "personal-website",
      url: "https://personal-website.adriantut.dev",
      tags: "React, Scss, Lottie",
    },
    {
      name: "Forkify App",
      imageName: "forkify-app",
      url: "https://forkify-app.adriantut.dev",
      tags: "JavaScript, Scss",
    },
    {
      name: "Html & Css Homepage",
      imageName: "homepage",
      url: "https://html-css-app.adriantut.dev",
      tags: "Html, Css",
    },
    {
      name: "Calculator App",
      imageName: "calculator",
      url: "https://calculator-app.adriantut.dev",
      tags: "JavaScript, Html, Css",
    },
  ];

  const projectsList = projects.map((project, index) => (
    <li
      className={`item item-${index}`}
      key={index}
      style={{
        backgroundImage: `url(./project-images/${project.imageName})`,
        backgroundSize: "cover",
      }}
    >
      <span className="name">{project.name}</span>
      <span className="tags">{project.tags}</span>
      <a href={project.url} className="link">
        View
      </a>
      <div className="background"></div>
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

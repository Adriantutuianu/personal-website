import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  const projects = [
    {
      name: "Product Management App",
      url: "https://product-management-app.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/product-management-app",
      tags: "React, Ant Design, Fetch API",
      description: "Description Project 1",
    },
    {
      name: "Shopping List",
      url: "https://shopping-list.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/shopping-list-app",
      tags: "React, Ant Design",
    },
    {
      name: "Random Quotes",
      url: "https://random-quotes.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/random-quotes-project",
      tags: "React, Fetch API",
    },
    {
      name: "Personal Website",
      url: "https://personal-website.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/personal-website",
      tags: "React, Scss, Lottie",
    },
    {
      name: "Forkify App",
      url: "https://forkify-app.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/Forkify-App",
      tags: "JavaScript, Scss",
    },
    {
      name: "Html & Css Homepage",
      url: "https://html-css-app.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/HTML-CSS-June-2021",
      tags: "Html, Css",
    },
    {
      name: "Calculator App",
      url: "https://calculator-app.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/Calculator-app-JavaScript",
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

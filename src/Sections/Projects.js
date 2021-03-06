import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";
import Particles from "react-particles-js";

const Projects = ({ setTitle }) => {
  const projects = [
    {
      name: "Product Management App",
      url: "https://products.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/product-management-app",
      tags: "React, Ant Design, Fetch API",
      description:
        "Single page application built in React, that will include CRUD operations and will have the following functionalities: Routing, Authentication, Pagination, Filters & sorting.",
    },
    {
      name: "Shopping List",
      url: "https://shopping.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/shopping-list-app",
      tags: "React, Ant Design",
      description:
        "A simple react application where you can add or delete items in your shopping list.",
    },
    {
      name: "Random Quotes",
      url: "https://quotes.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/random-quotes-project",
      tags: "React, Fetch API",
      description:
        "React application that will use built in Fetch Api to retrieve random quotes. Used React Hooks and will generate quote on load of the app.",
    },
    {
      name: "Personal Website",
      url: "https://adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/personal-website",
      tags: "React, Scss, Lottie",
      description:
        "React SPA that includes portofolio projects. Used Lottie for animations.",
    },
    {
      name: "Forkify App",
      url: "https://forkify.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/Forkify-App",
      tags: "JavaScript, Scss",
      description:
        "Responsive page on which I used HTML5, CSS, SCSS and JavaScript.",
    },
    {
      name: "Html & Css Homepage",
      url: "https://mockup.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/HTML-CSS-June-2021",
      tags: "Html, Css",
      description:
        "Responsive homepage mockup with HTML5 and CSS3. For layout I used CSS Grid and CSS Flex.",
    },
    {
      name: "Calculator App",
      url: "https://calculator.adriantut.dev",
      githubUrl: "https://github.com/Adriantutuianu/Calculator-app-JavaScript",
      tags: "JavaScript, Html, Css",
      description:
        "A calculator application built with HTML5, CSS3 and JavaScript.",
    },
  ];

  const params = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: false,
        },
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        direction: "bottom",
        out_mode: "out",
      },
      line_linked: {
        enable: false,
      },
    },
  };

  const projectsList = projects.map((project, index) => (
    <li
      className={`item item-${index}`}
      key={index}
      style={{
        backgroundImage: `url(./project-images/${project.imageName})`,
        backgroundSize: "cover",
      }}
    >
      <div className="item-content">
        <span className="name">{project.name}</span>
        <span className="description">{project.description}</span>
        <span className="tags">{project.tags}</span>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="link project-link"
        >
          View Project
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="link github-link"
        >
          View Code
        </a>
      </div>
      <div className="background"></div>
    </li>
  ));

  return (
    <Element name="projects-section" id="projects" className="section">
      {" "}
      <ul className="projects-grid content-wrap">{projectsList}</ul>
      <Particles className="particles" params={params} />
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

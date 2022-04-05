import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  const project = [
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
      name: "Html Css App",
      url: "https://html-css-app.adriantut.dev",
    },
    {
      name: "Calculator App",
      url: "https://calculator-app.adriantut.dev",
    },
  ];
  return (
    <Element name="projects-section" id="projects" className="section">
      {" "}
      <ul className="projects-grid content-wrap">
        <li
          class="item item1"
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
        >
          Project title 1
        </li>
        <li
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
          class="item item2"
        >
          Project title 2
        </li>
        <li
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
          class="item item3"
        >
          Project title 3
        </li>
        <li
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
          class="item item4"
        >
          Project title 4
        </li>
        <li
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
          class="item item5"
        >
          Project title 5
        </li>
        <li
          style={{
            backgroundImage: "url(./project-images/test.jpg)",
            backgroundSize: "cover",
          }}
          class="item item6"
        >
          Project title 6
        </li>
      </ul>
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

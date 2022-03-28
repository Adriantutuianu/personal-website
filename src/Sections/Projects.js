import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
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

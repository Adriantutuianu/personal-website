import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  return (
    <Element name="projects-section" id="projects" className="section">
      {" "}
      <ul className="projects-grid content-wrap">
        <li class="item item1">Item 1</li>
        <li class="item item2">Item 2</li>
        <li class="item item3">Item 3</li>
        <li class="item item4">Item 4</li>
        <li class="item item5">Item 5</li>
        <li class="item item6">Item 6</li>
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

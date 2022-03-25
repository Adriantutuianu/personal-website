import React from "react";
import "./projects.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const Projects = ({ setTitle }) => {
  return (
    <Element name="projects-section" id="projects" className="section">
      {" "}
      <div className="projects-grid">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
        <div class="item item4">Item 4</div>
        <div class="item item5">Item 5</div>
        <div class="item item6">Item 6</div>
      </div>
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

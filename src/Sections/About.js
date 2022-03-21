import React from "react";
import "./about.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const About = ({ setTitle }) => {
  return (
    <Element name="about-section" id="about" className="section">
      <p className="text">Hello</p>
      About
      <ScrollTo
        destination={"projects-section"}
        title={"Projects - Adrian Tut"}
        setTitle={setTitle}
        uniqueKey={11}
      />
    </Element>
  );
};

export default About;

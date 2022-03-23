import React from "react";
import "./about.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const About = ({ setTitle }) => {
  return (
    <Element name="about-section" id="about" className="section">
      <h1>Me, Myself & I </h1>
      <p>
        I am 33 years old and last year I made a decision that I am proud of -
        decided and committed to absorb as much information as I can about
        building projects.
      </p>
      <p>
        I have started to learn HTML5 , CSS , SCSS , JAVASCRIPT and ending with
        REACT .
      </p>
      <p>
        You can see the progress of my journey on Github and on LinkedIn all
        certificates that I gained.
      </p>
      <p>
        In my spare time I like DIY, swimming, outdoor activities , travel and
        building my own projects. A family person and father of 3 years old son.
      </p>
      <p>
        Interested in the entire frontend spectrum and working on ambitious
        projects with positive people.
      </p>
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

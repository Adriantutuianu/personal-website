import React from "react";
import "./about.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";

const About = ({ setTitle }) => {
  return (
    <Element name="about-section" id="about" className="section">
      <div className="content-wrap">
        <div className="left-side">
          {" "}
          <h2>Me, Myself & I </h2>
          <p>
            I am 33 years old and last year I made a decision that I am proud of
            - decided and committed to absorb as much information as I can about
            building projects.
          </p>
          <p>I have started to learn HTML, CSS & SCSS, JAVASCRIPT and REACT.</p>
          <p>Some of the courses that I have done:</p>
          <ul className="courses">
            <li>HTML Advanced Course - Programming Hub</li>
            <li>CSS Course - Programming Hub</li>
            <li>Javascript Advanced Course - ProgrammingHub</li>
            <li>Javascript 30 - Wes Bos</li>
            <li>The Complete Javascript - From Zero To Expert - Udemy</li>
            <li>React Development - Programming Hub</li>
            <li>Learning React.js- LinkedIn</li>
            <li>React.js Essential Training- LinkedIn</li>
            <li>React Hooks - LinkedIn</li>
          </ul>
          <p>
            You can see the progress of my journey on Github and on LinkedIn all
            certificates that I gained.
          </p>
          <p>
            In my spare time I like DIY, swimming, outdoor activities , travel
            and building my own projects. I am a family person and father of a 3
            years old son.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
        </div>
        <div className="right-side">RIGHT SIDE</div>
      </div>
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

import React from "react";
import "./about.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";
import Lottie from "react-lottie";
import * as animationAboutSection from "../icons/85222-about-aniamtion.json";

const About = ({ setTitle }) => {
  const animationAbout = {
    loop: true,
    autoplay: true,
    animationData: animationAboutSection,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
            On Github you can see the day by day progress and on LinkedIn all
            certificates that I gained since I started to learn coding.
          </p>
          <p>
            In my spare time I like DIY, swimming, outdoor activities, travel
            and building my own projects. I am a family person and father of one
            toddler.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
        </div>
        <div className="right-side">
          {" "}
          <Lottie options={animationAbout} height={500} width={439} />
        </div>
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

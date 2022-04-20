import React from "react";
import "./home.scss";
import { Element } from "react-scroll";
import ScrollTo from "../components/ScrollTo";
import Lottie from "react-lottie";
import * as animationData from "../icons/99312-developer-skills.json";
import * as smartBoy from "../icons/21045-smartboy-2.json";
import Particles from "react-particles-js";

const Home = ({ setTitle }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultAnimation = {
    loop: true,
    autoplay: true,
    animationData: smartBoy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  return (
    <Element name="home-section" id="home" className="section">
      {" "}
      <div className="left-side">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="right-side">
        <Lottie options={defaultAnimation} height={100} width={100} />
        <div className="text-wrap">
          <h1 className="title">Hi, I'm Adrian.</h1>
          <h2 className="sub-title">
            A passionate web developer based in Sheffield.
          </h2>
        </div>
      </div>
      <Particles className="particles" params={params} />
      <ScrollTo
        destination={"about-section"}
        title={"About - Adrian Tut"}
        setTitle={setTitle}
        uniqueKey={10}
      />
    </Element>
  );
};

export default Home;

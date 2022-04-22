import React from "react";
import "./contact.scss";
import { Element } from "react-scroll";
import { ReactComponent as MailImage } from "../icons/mail.svg";
import { ReactComponent as LinkedInImage } from "../icons/linkedin.svg";
import { ReactComponent as GithubImage } from "../icons/github.svg";
import Lottie from "react-lottie";
import * as contactLetterGreen from "../icons/96614-contact-letter-green.json";

const Contact = () => {
  const contactLetter = {
    loop: true,
    autoplay: true,
    animationData: contactLetterGreen,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Element name="contact-section" id="contact" className="section">
      <h1>
        Let`s get <span> in touch </span>
      </h1>
      <div className="contact-wrap">
        <a
          className="item item--mail"
          href="mailto:hello@adriantut.dev?subject=Contact Adrian"
          title="Email Adrian at hello@adriantut.dev"
          target="_blank"
          rel="noreferrer"
        >
          <MailImage />
          <span>Email Adrian now</span>
        </a>
        <a
          className="item item--linkedin"
          href="https://www.linkedin.com/in/adrian-tutuianu"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInImage />
          <span>/in/adriantutuianu</span>
        </a>
        <a
          className="item item--github"
          href="https://github.com/Adriantutuianu"
          title="github"
          target="_blank"
          rel="noreferrer"
        >
          <GithubImage />
          <span>/adriantutuianu</span>
        </a>
      </div>
      <div className="contact-letter">
        <Lottie options={contactLetter} height={100} width={100} />
      </div>
    </Element>
  );
};

export default Contact;

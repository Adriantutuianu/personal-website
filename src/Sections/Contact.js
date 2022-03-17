import React from "react";
import "./contact.scss";
import { Element } from "react-scroll";
import { ReactComponent as MailImage } from "../icons/mail-image.svg";
import { ReactComponent as PhoneImage } from "../icons/phone-logo.svg";
import { ReactComponent as LinkedInImage } from "../icons/linkedin-logo.svg";

const Contact = () => {
  return (
    <Element name="contact-section" id="contact" className="section">
      <h1>
        Let`s get <span> in touch </span>
      </h1>
      <div className="contact-wrap">
        <div className="item item--phone">
          <PhoneImage />
          <span>07927753503</span>
        </div>
        <a
          className="item item--mail"
          href="mailto:adrian.tut20@yahoo.com?subject=Contact Adrian"
          title="Email Adrian at adrian.tut20@yahoo.com"
        >
          <MailImage />
          <span>adrian.tut20@yahoo.com</span>
        </a>
      </div>
    </Element>
  );
};

export default Contact;

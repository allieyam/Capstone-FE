import React from "react";

import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template2.css";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template2({
  name,
  email,
  keyskills,
  work,
  education,
  phone,
}: UserTypes) {
  return (
    <div className="template">
      <div className="template2-container">
        <div className="template2-header-container">
          <div className="template2-name">{name}</div>
          <div className="template2-contact-container">
            <div className="template2-email">{email}</div>
            <div className="template2-phone">{phone}</div>
            <div className="template2-bottom-headers">Key Skills</div>
            <div className="template2-skills">{keyskills}</div>
          </div>
        </div>
        <div className="template2-bottom">
          <div className="template2-blurb">Bla bla blablablbalba</div>
          <div className="template2-bottom-headers">Work Experience</div>
          <div className="template2-work">{work}</div>
          <div className="template2-bottom-headers">Education</div>
          <div className="template2-education">{education}</div>
        </div>
      </div>
    </div>
  );
}

export default Template2;

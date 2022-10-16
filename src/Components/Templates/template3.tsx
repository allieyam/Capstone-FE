import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template3.css";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template3({
  username,
  email,
  keyskills,
  work,
  education,
  phone,
}: UserTypes) {
  // const obj = { font: "A", fontSize: 8, color: "white" };
  return (
    <div className="template">
      <div className="template3-container">
        <div className="template3-info">
          <div className="template3-blurb">Bla bla blablablbalba</div>
          <div className="template3-bottom-headers">Work Experience</div>
          <div className="template3-work">
            {work.map((place, index) => {
              return (
                <div className="template3-workplace" key={index}>
                  {place.place}
                  {place.description}
                  {place.date_started}
                  {place.date_ended}
                </div>
              );
            })}
          </div>
          <div className="template3-bottom-headers">Education</div>
          <div className="template3-education">
            {" "}
            {education.map((place, index) => {
              return (
                <div className="template3-educationplace" key={index}>
                  {place.place}
                  {place.description}
                  {place.date_started}
                  {place.date_ended}
                </div>
              );
            })}
          </div>
          <div className="template3-bottom-headers">Key Skills</div>
          <div className="template3-skills">
            {keyskills.map((skill, index) => {
              return (
                <div className="template1-skill" key={index}>
                  {skill.name}:{skill.description}
                </div>
              );
            })}
          </div>
        </div>
        <div className="template3-header-container">
          <div className="template3-name">{username}</div>
          <div className="template3-contact-container">
            <div className="template3-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}📧
              {email}
            </div>
            <div className="template3-phone">📱{phone}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;

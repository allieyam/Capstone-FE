import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template1.css";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template1({
  name,
  email,
  keyskills,
  work,
  education,
  phone,
  blurb,
}: UserTypes) {
  return (
    <div className="template">
      <div className="template1-container">
        <div className="template1-header-container">
          <div className="template1-name">{name}</div>
          <div className="template1-contact-container">
            <div className="template1-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}📧
              {email}
            </div>
            <div className="template1-phone">📱{phone}</div>
          </div>
        </div>
        <div className="template1-blurb">{blurb}</div>
        <div className="template1-bottom-headers">Work Experience</div>
        <div className="template1-work">
          {work.map((place, index) => {
            return (
              <div className="template1-workplace" key={index}>
                <div className="template1-subheader">
                  <div className="template1-place"> {place.place}</div>
                  <div className="template1-position">{place.position}</div>
                </div>
                <div className="template1-dates">
                  {place.date_started}-{place.date_ended}
                </div>
                <li>{place.description}</li>
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Education</div>
        <div className="template1-education">
          {education.map((place, index) => {
            return (
              <div className="template1-educationplace" key={index}>
                <div className="template1-subheader">
                  <div className="template1-place">{place.place}</div>
                  <div className="template1-position">{place.level}</div>
                </div>
                <div className="template1-dates">
                  {place.date_started}-{place.date_ended}
                </div>

                <li>{place.description}</li>
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Key Skills</div>
        <div className="template1-skills">
          {keyskills.map((skill, index) => {
            return (
              <div className="template1-skill" key={index}>
                <div className="template1-place-skill">{skill.name}</div>

                <li>{skill.description}</li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Template1;

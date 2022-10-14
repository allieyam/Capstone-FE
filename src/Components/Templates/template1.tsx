import React, { useState, useEffect, ChangeEvent } from "react";
import { UserTypes } from "../types";
import "../../styling/TemplateStyling/template1.css";
import axios from "axios";
import TemplateState from "./TemplateState";

//Define the interface here
interface Style {
  data: {
    font: string;
    fontSize: number;
    color: string;
  };
}

function Template1({
  username,
  email,
  keyskills,
  work,
  education,
  phone,
  user,
  updateEducation,
  updateAll,
}: UserTypes) {
  //Initialise skills
  const initialSkill = [
    {
      name: "",
      description: "",
    },
  ];

  const [skills, setSkills] = useState("");
  const [skillDes, setSkillDes] = useState("");

  type AllSkill = typeof initialSkill[number];
  const [allSkills, setAllSkills] = useState<AllSkill[]>(initialSkill);
  const handleSkill = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "skills":
        setSkills(event.target.value);
        break;
      case "description":
        setSkillDes(event.target.value);
        break;
      default:
    }
    setAllSkills([
      {
        name: skills,
        description: skillDes,
      },
    ]);
  };

  //Education
  // const [place, setPlace] = useState("");
  // const [description, setDescription] = useState("");
  // const [dateStarted, setDateStarted] = useState("");
  // const [dateEnded, setDateEnded] = useState("");
  // const initialFormValues = [
  //   {
  //     place: "",
  //     description: "",
  //     date_started: "",
  //     date_ended: "",
  //   },
  // ];
  // type FormValue = typeof initialFormValues[number];
  // const [formValues, setFormValues] = useState<FormValue[]>(initialFormValues);
  // const handleEducation = (event: ChangeEvent<HTMLInputElement>) => {
  //   switch (event.target.name) {
  //     case "place":
  //       setPlace(event.target.value);
  //       break;
  //     case "date_started":
  //       setDateStarted(event.target.value);
  //       break;
  //     case "date_ended":
  //       setDateEnded(event.target.value);
  //       break;
  //     case "description":
  //       setDescription(event.target.value);
  //       break;
  //     default:
  //   }
  //   setFormValues([
  //     {
  //       place: "",
  //       description: "",
  //       date_started: "",
  //       date_ended: "",
  //     },
  //   ]);
  // };

  // const [username, setUsername] = useState("");
  // const [mail, setMail] = useState("");
  // const [contact, setContact] = useState("");
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   switch (event.target.name) {
  //     case "name":
  //       setUsername(event.target.value);
  //       break;
  //     case "email":
  //       setMail(event.target.value);
  //       break;
  //     case "contact":
  //       setContact(event.target.value);
  //       break;
  //     default:
  //   }
  // };

  //set to editing mode
  const [toggle, setToggle] = useState(true);

  const toggleClicked = () => {
    setToggle(false);
  };

  //resubmit data to backend
  const handleSubmit = async (event: any) => {
    setToggle(true);
    event.preventDefault();
    console.log("clicked");
    console.log(education);
    // Update in backend
    await axios
      .put(`${process.env.REACT_APP_API_SERVER}/${user}`, {
        name: username,
        email: email,
        contact: phone,
        keySkills: allSkills,
        education: education,
      })
      .then((res) => {
        // Clear form state
        setAllSkills(initialSkill);
      });
  };

  return (
    <div className="template">
      <div className="template1-container">
        <div className="template1-header-container">
          <div className="template1-name">
            {toggle ? (
              username
            ) : (
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="name"
                placeholder="name"
                value={username}
                onChange={(event) => updateAll("name", event.target.value)}
              ></input>
            )}
          </div>
          <div className="template1-contact-container">
            <div className="template1-email">
              {/* <FontAwesomeIcon icon="far fa-envelope" /> */}
              {/* 📧 */}
              {toggle ? (
                email
              ) : (
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={(event) => updateAll("email", event.target.value)}
                ></input>
              )}
            </div>
            <div className="template1-phone">
              📱
              {toggle ? (
                phone
              ) : (
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="contact"
                  placeholder="contact"
                  value={phone}
                  onChange={(event) => updateAll("contact", event.target.value)}
                ></input>
              )}
            </div>
          </div>
        </div>
        <div className="template1-blurb">Summary</div>
        {/* <div className="template1-bottom-headers">Experience</div>
        <div className="template1-work">
          {toggle ? (
            <div>
              <>
                {work.map((place, index) => {
                  return (
                    <div className="template1-workplace" key={index}>
                      {place.place}
                      <br />
                      {place.description}
                      <br />
                      {place.date_started}
                      <br />
                      {place.date_ended}
                    </div>
                  );
                })}
              </>
            </div>
          ) : (
            <div>
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="place"
                placeholder="COMPANY"
                // onChange={(event) => handleSkill(event)}
              />
              <br />
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="description"
                placeholder="DESCRIPTION"
                // onChange={(event) => handleSkill(event)}
              />
            </div>
          )}
        </div> */}
        <div className="template1-bottom-headers">Education</div>
        <div className="template1-education">
          {education.map((educationPlace, index) => {
            return toggle ? (
              <div className="template1-educationplace" key={index}>
                {educationPlace.place}
                <br />
                {educationPlace.description}
                <br />
                {educationPlace.date_started}
                <br />
                {educationPlace.date_ended}
              </div>
            ) : (
              <div className="template1-educationplace" key={index}>
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="place"
                  placeholder="place"
                  value={educationPlace.place}
                  onChange={(event) =>
                    updateEducation(index, "place", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="description"
                  placeholder="DESCRIPTION"
                  value={educationPlace.description}
                  onChange={(event) =>
                    updateEducation(index, "description", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="date_started"
                  placeholder="date_started"
                  value={educationPlace.date_started}
                  onChange={(event) =>
                    updateEducation(index, "date_started", event.target.value)
                  }
                />
                <br />
                <input
                  className=" text-gray-700 font-bold"
                  type="text"
                  name="date_ended"
                  placeholder="date_ended"
                  value={educationPlace.date_ended}
                  onChange={(event) =>
                    updateEducation(index, "date_ended", event.target.value)
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="template1-bottom-headers">Key Skills</div>
        {keyskills.map((skill, index) => {
          return toggle ? (
            <div className="template1-skill" key={index}>
              {skill.name}
              <br />
              {skill.description}
            </div>
          ) : (
            <div>
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="skills"
                // value={skill.name}
                onChange={(event) => handleSkill(event)}
              />
              <br />
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="description"
                // value={skill.description}
                placeholder="DESCRIPTION"
                onChange={(event) => handleSkill(event)}
              />
            </div>
          );
        })}
      </div>
      {toggle ? (
        <button onClick={() => toggleClicked()}>edit</button>
      ) : (
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      )}
    </div>
  );
}

export default Template1;

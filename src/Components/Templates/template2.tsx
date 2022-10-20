import React, { useState } from "react";
import axios from "axios";

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
  username,
  email,
  keyskills,
  work,
  education,
  phone,
  user,
}: UserTypes) {
  const [toggle, setToggle] = useState(true);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWork, setUserWork] = useState<any[]>([]);
  const [userEducation, setUserEducation] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [userBlurb, setUserBlurb] = useState("");

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
        keySkills: keyskills,
        education: education,
      })
      .then((res) => {
        // Clear form state
        console.log(res);
      });
  };

  function updateEducation(index: number, name: string, value: string) {
    setUserEducation((currentEducation) => {
      const newEducation = currentEducation.map(
        (place: any, placeIndex: number) => {
          if (index !== placeIndex) {
            return place;
          }
          const newPlace = { ...place, [name]: value };
          return newPlace;
        }
      );
      return newEducation;
    });
  }

  function updateSkill(index: number, name: string, value: string) {
    setUserSkills((currentSkill) => {
      const newSkill = currentSkill.map((skills: any, skillIndex: number) => {
        if (index !== skillIndex) {
          return skills;
        }
        const theSkills = { ...skills, [name]: value };
        return theSkills;
      });
      return newSkill;
    });
  }

  function updateWork(index: number, name: string, value: string) {
    setUserWork((currentWork) => {
      const newWork = currentWork.map((company: any, workIndex: number) => {
        if (index !== workIndex) {
          return company;
        }
        const working = { ...company, [name]: value };
        return working;
      });
      return newWork;
    });
  }

  function updateAll(name: string, value: string) {
    switch (name) {
      case "name":
        setUserName(value);
        break;
      case "email":
        setUserEmail(value);
        break;
      case "contact":
        setUserPhone(value);
        break;
      default:
    }
  }

  return (
    <div className="template">
      <div className="template2-container">
        <div className="template2-header-container">
          <div className="template2-name">
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
          <div className="template2-contact-container">
            <div className="template2-email">
              {" "}
              📧
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
            <div className="template2-phone">
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
            <div className="template2-bottom-headers">Key Skills</div>
            <div className="template2-skills">
              {keyskills.map((keySk, index) => {
                return toggle ? (
                  <div className="template2-skill" key={index}>
                    {keySk.name}
                    <br />
                    {keySk.description}
                  </div>
                ) : (
                  <div>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="name"
                      placeholder="NAME"
                      value={keySk.name}
                      onChange={(event) =>
                        updateSkill(index, "name", event.target.value)
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="description"
                      value={keySk.description}
                      placeholder="DESCRIPTION"
                      onChange={(event) =>
                        updateSkill(index, "description", event.target.value)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="template2-bottom">
          <div className="template2-blurb">Bla bla blablablbalba</div>
          <div className="template2-bottom-headers">Work Experience</div>
          <div className="template2-work">
            {work.map((place, index) => {
              return (
                <div className="template2-workplace" key={index}>
                  <div className="template2-subheader">
                    <div className="template2-place">{place.place}</div>
                    <div className="template2-position">{place.position}</div>
                  </div>
                  <div className="template2-dates">
                    {place.date_started}-{place.date_ended}
                  </div>

                  <li>{place.description}</li>
                </div>
              );
            })}
          </div>
          <div className="template2-bottom-headers">Education</div>
          <div className="template2-education">
            {education.map((educationPlace, index) => {
              return toggle ? (
                <div className="template2-educationplace" key={index}>
                  {educationPlace.place}
                  <br />
                  {educationPlace.description}
                  <br />
                  {educationPlace.date_started}
                  <br />
                  {educationPlace.date_ended}
                </div>
              ) : (
                <div className="template2-educationplace" key={index}>
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
                    type="date"
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
                    type="date"
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
        </div>
        {toggle ? (
          <button onClick={() => toggleClicked()}>edit</button>
        ) : (
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        )}
        {/* <button onClick={generatePDF} type="button">
        Export as PDF
      </button> */}
      </div>
    </div>
  );
}

export default Template2;

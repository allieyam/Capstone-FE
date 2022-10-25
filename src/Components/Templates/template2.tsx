import React, { useState } from "react";
import { UserTypes } from "../types";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styling/TemplateStyling/template2.css";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
  image,
  userSummary,
  updateEducation,
  updateAll,
  updateSkill,
  updateWork,
}: UserTypes) {
  const [toggle, setToggle] = useState(true);
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const toggleClicked = () => {
    setToggle(false);
  };

  //resubmit data to backend
  const handleSubmit = async (event: any) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    setToggle(true);
    event.preventDefault();
    // console.log("clicked");
    console.log(education);
    console.log("clicked");
    console.log("education in handle submit", education);
    // Update in backend
    await axios.put(
      `${process.env.REACT_APP_API_SERVER}/${user}`,
      {
        name: username,
        email: email,
        contact: phone,
        keySkills: keyskills,
        education: education,
        workExperience: work,

        image,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    await axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/${user}/cv`,
        {
          summary: userSummary,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log("res in handlesubmit", res);
      });
  };

  const printDocument = () => {
    const input = document.getElementById("divToPrint")!;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF();
      pdf.addImage(canvas, "pdf", 25, 50, 170, 320);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="template" id="divToPrint">
      <div className="template2-container">
        <div className="template2-header-container">
          <div className="template2-name">
            {" "}
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
              {" "}
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
              {keyskills &&
                keyskills.map((keySk, index) => {
                  return toggle ? (
                    <div className="template2-skill" key={index}>
                      <div className="template1-place"> {keySk.name}</div>
                      {keySk.description}
                    </div>
                  ) : (
                    <div>
                      <input
                        className=" text-gray-700 font-bold"
                        type="text"
                        name="name"
                        placeholder="NAME"
                        value={keySk.name || ""}
                        onChange={(event) =>
                          updateSkill(index, "name", event.target.value)
                        }
                      />
                      <br />
                      <input
                        className=" text-gray-700 font-bold"
                        type="text"
                        name="description"
                        value={keySk.description || ""}
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
          <div className="template2-blurb">
            {" "}
            {toggle ? (
              userSummary
            ) : (
              <input
                className=" text-gray-700 font-bold"
                type="text"
                name="summary"
                placeholder="summary"
                value={userSummary}
                onChange={(event) => updateAll("summary", event.target.value)}
              ></input>
            )}
          </div>
          <div className="template2-bottom-headers">Work Experience</div>
          <div className="template2-work">
            {work &&
              work.map((company, index) => {
                return toggle ? (
                  <div className="template2-work-section" key={index}>
                    <div className="template2-subheader">
                      <div className="template1-work-header">
                        <div className="template1-place">
                          {company.place}&nbsp; <i> {company.position}</i>
                        </div>
                        <div className="template1-dates">
                          {company.date_started}-{company.date_ended}
                        </div>
                      </div>
                      {company.description}
                    </div>
                    <br />
                  </div>
                ) : (
                  <div className="template1-educationplace" key={index}>
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="place"
                      placeholder="COMPANY"
                      value={company.place}
                      onChange={(event) =>
                        updateWork(index, "place", event.target.value)
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="text"
                      name="description"
                      placeholder="DESCRIPTION"
                      value={company.description}
                      onChange={(event) =>
                        updateWork(index, "description", event.target.value)
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_started"
                      placeholder="date_started"
                      value={company.date_started}
                      onChange={(event) =>
                        updateWork(index, "date_started", event.target.value)
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_ended"
                      placeholder="date_ended"
                      value={company.date_ended}
                      onChange={(event) =>
                        updateWork(index, "date_ended", event.target.value)
                      }
                    />
                  </div>
                );
              })}
          </div>
          <div className="template2-bottom-headers">Education</div>
          <div className="template2-education">
            {" "}
            {education &&
              education.map((educationPlace, index) => {
                return toggle ? (
                  <div className="template1-education-section" key={index}>
                    <div className="template1-education-header">
                      <div className="template1-place">
                        {educationPlace.place}&nbsp;{" "}
                        <i> {educationPlace.level}</i>
                      </div>
                      <div className="template1-dates">
                        {educationPlace.date_started}-
                        {educationPlace.date_ended}
                      </div>
                    </div>

                    {educationPlace.description}
                    <br />
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
                      value={educationPlace.description || " "}
                      onChange={(event) =>
                        updateEducation(
                          index,
                          "description",
                          event.target.value
                        )
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_started"
                      placeholder="date_started"
                      value={educationPlace.date_started || ""}
                      onChange={(event) =>
                        updateEducation(
                          index,
                          "date_started",
                          event.target.value
                        )
                      }
                    />
                    <br />
                    <input
                      className=" text-gray-700 font-bold"
                      type="date"
                      name="date_ended"
                      placeholder="date_ended"
                      value={educationPlace.date_ended || ""}
                      onChange={(event) =>
                        updateEducation(index, "date_ended", event.target.value)
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <button onClick={() => printDocument()}>Print</button>
      <br />
      {toggle ? (
        <button onClick={() => toggleClicked()}>Edit</button>
      ) : (
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      )}
    </div>
  );
}

export default Template2;

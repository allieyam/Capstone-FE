import React, { useState, MouseEvent, useEffect } from "react";
import "../styling/App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Template1 from "./Templates/template1";

function Template() {
  const navigate = useNavigate();
  const user_id = 8;
  const getUserData = async () => {
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${user_id}`
    );

    let initialBlurb = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${user_id}/cv`
    );

    let userData = initialItems.data[0];
    // let userBlurb = initialBlurb.data[0];
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPhone(userData.contact);
    setUserWork(userData.workExperience);
    setUserEducation(userData.education);
    setUserSkills(userData.keySkills);
  };

  useEffect(() => {
    getUserData();
  }, []);

  // set state for one chosen out of the 3 templates
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWork, setUserWork] = useState<any[]>([]);
  const [userEducation, setUserEducation] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);

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
    <div>
      <button className="template1-button" onClick={(e) => handleClick1(e)}>
        Template 1
      </button>
      {/* <Template1
        name={userName}
        email={userEmail}
        keyskills={userSkills}
        work={userWork}
        education={userEducation}
        phone={userPhone}
        blurb={userBlurb}
      /> */}
      <button className="template2-button" onClick={(e) => handleClick2(e)}>
        Template 2
      </button>
      {/* <Template2
        name={userName}
        email={userEmail}
        keyskills={userSkills}
        work={userWork}
        education={userEducation}
        phone={userPhone}
        blurb={userBlurb}
      /> */}
      <button className="template3-button" onClick={(e) => handleClick3(e)}>
        Template 3
      </button>
      {/* <Template3
        name={userName}
        email={userEmail}
        keyskills={userSkills}
        work={userWork}
        education={userEducation}
        phone={userPhone}
        blurb={userBlurb}
      /> */}
      <button onClick={() => navigate("/add-template")}>
        Add New Template
      </button>

      {/* <Link to="/add-template" templateChoice={templateChoice}>
        Add a Template
      </Link>

      <Link to={{ pathname: "/add-template", state: { templateChoice } }}>
        Add a Template
      </Link> */}
    </div>
  );
}

export default Template;

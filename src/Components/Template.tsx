import React, { useState, MouseEvent, useEffect } from "react";
import "../styling/App.css";
import AddTemplate from "./AddTemplate";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserTypes } from "../Components/types";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";

// import { Template1 } from "../Components/Templates/template1";

function Template() {
  const navigate = useNavigate();
  const user_id = 2;
  const getUserData = async () => {
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${user_id}`
    );

    let initialBlurb = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${user_id}/cv`
    );

    let userData = initialItems.data[0];
    let userBlurb = initialBlurb.data[0];
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPhone(userData.contact);
    setUserWork(userData.workExperience);
    setUserEducation(userData.education);
    setUserSkills(userData.keySkills);
    setUserBlurb(userBlurb.summary);

    console.log(
      initialItems.data,
      initialBlurb.data,
      "initial data in get wishlist items"
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  const chooseTemplate = async () => {
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}//${user_id}/cv`,
      {
        summary: userSummary,
        template_id: templateChoice,
      }
    );
  };

  // set state for one chosen out of the 3 templates
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWork, setUserWork] = useState([]);
  const [userEducation, setUserEducation] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [userBlurb, setUserBlurb] = useState("");
  const [templateChoice, setTemplateChoice] = useState(0);
  const [userSummary, setUserSummary] = useState("");

  const [templateChosen, setTemplateChosen] = useState(null);

  const handleClick1 = (e: MouseEvent) => {
    console.log("clicked");
    setTemplateChoice(1);
  };
  const handleClick2 = (e: MouseEvent) => {
    console.log("clicked");
    setTemplateChoice(2);
  };
  const handleClick3 = (e: MouseEvent) => {
    console.log("clicked");
    setTemplateChoice(3);
  };

  useEffect(() => {
    //when template choice changes (template button is clicked), navigate to edit on chosen template
  }, [templateChoice]);

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

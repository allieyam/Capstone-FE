import React, { useState, MouseEvent, useEffect } from "react";
import "../styling/App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Template1 from "./Templates/template1";

function Template() {
  const navigate = useNavigate();

  const [templateChoice, setTemplateChoice] = useState(0);

  const handleClick1 = (e: MouseEvent) => {
    setTemplateChoice(1);
  };
  const handleClick2 = (e: MouseEvent) => {
    setTemplateChoice(2);
  };
  const handleClick3 = (e: MouseEvent) => {
    setTemplateChoice(3);
  };

  return (
    <div>
      <div className="template-button-container">
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
        // blurb={userBlurb}
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
        {/* <button
        onClick={() => navigate("/add-template", { choice: templateChoice })}
      >
        Add New Template
      </button>

      <Link to="/add-template" choice={templateChoice}>
        Add a Template
      </Link>

      <Link to={{ pathname: "/add-template", state: templateChoice }}>
        Add a Template
      </Link> */}
      </div>
      <Link to="/add-template" state={templateChoice}>
        Add a Template
      </Link>
    </div>
  );
}

export default Template;

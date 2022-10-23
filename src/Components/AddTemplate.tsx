import React, { useEffect, useState } from "react";
import "../styling/App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";

type TypeProp = {
  choice: number;
};

function AddTemplate() {
  console.log("in add template");

  //useLocation to receive props
  const location = useLocation();
  console.log(location, "location", location.state);
  const template_choice = location.state;
  const [templateChoice, setTemplateChoice] = useState(template_choice);
  const [userId, setUserId] = useState(2);

  const getUserData = async () => {
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userId}`
    );

    let initialBlurb = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`
    );

    let userData = initialItems.data[0];
    let userBlurb = initialBlurb.data[0];
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPhone(userData.contact);
    setUserWork(userData.workExperience);
    setUserEducation(userData.education);
    setUserSkills(userData.keySkills);
    setUserBlurb(userBlurb);

    console.log(initialItems.data[0]);
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
  const [userBlurb, setUserBlurb] = useState("");

  return (
    <div>
      <h1>Add Template</h1>
      {/* <SentimentAnalysis /> */}
      {(() => {
        if (templateChoice == 1) {
          return (
            <Template1
              username={userName}
              email={userEmail}
              keyskills={userSkills}
              work={userWork}
              education={userEducation}
              phone={userPhone}
              blurb={userBlurb}
              user={userId}
            />
          );
        } else if (templateChoice == 2) {
          return (
            <Template2
              username={userName}
              email={userEmail}
              keyskills={userSkills}
              work={userWork}
              education={userEducation}
              phone={userPhone}
              blurb={userBlurb}
              user={2}
            />
          );
        } else if (templateChoice == 3) {
          return (
            <Template3
              username={userName}
              email={userEmail}
              keyskills={userSkills}
              work={userWork}
              education={userEducation}
              phone={userPhone}
              blurb={userBlurb}
              user={1}
            />
          );
        } else {
          return <div>Template not chosen!</div>;
        }
      })()}
    </div>
  );
}

export default AddTemplate;

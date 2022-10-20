import React, { useEffect, useState, useContext } from "react";
import "../styling/App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";
// import SentimentAnalysis from "./Sentiment/SentimentAnalysis";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../App";
type TypeProp = {
  choice: number;
};

function AddTemplate() {
  const [templateChoice, setTemplateChoice] = useState(1);
  console.log("in add template");

  //useLocation to receive props
  const location = useLocation();
  console.log(location, "location", location.state);
  const { getAccessTokenSilently }: any = useAuth0();

  const userId = Number(useContext(UserContext));
  // set state for one chosen out of the 3 templates
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWork, setUserWork] = useState<any[]>([]);
  const [userEducation, setUserEducation] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [image, setImage] = useState("");
  // const [userBlurb, setUserBlurb] = useState("");

  const getUserData = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // let initialBlurb = await axios.get(
    //   `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${accessToken}`,
    //     },
    //   }
    // );
    console.log(initialItems);
    let userData = initialItems.data[0];
    // let userBlurb = initialBlurb.data[0];
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPhone(userData.contact);
    setUserWork(userData.workExperience);
    setUserEducation(userData.education);
    setUserSkills(userData.keySkills);
    setImage(userData.image);
    console.log(initialItems.data[0]);
  };

  useEffect(() => {
    getUserData();
  }, []);

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

  console.log(userId);
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
              updateEducation={updateEducation}
              updateAll={updateAll}
              phone={userPhone}
              user={userId}
              updateSkill={updateSkill}
              updateWork={updateWork}
              image={image}
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
              updateEducation={updateEducation}
              updateAll={updateAll}
              phone={userPhone}
              user={userId}
              updateSkill={updateSkill}
              updateWork={updateWork}
              image={image}
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
              updateEducation={updateEducation}
              updateAll={updateAll}
              phone={userPhone}
              user={userId}
              updateSkill={updateSkill}
              updateWork={updateWork}
              image={image}
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

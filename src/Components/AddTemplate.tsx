import React, { useEffect, useState } from "react";
import "../styling/App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Template1 from "./Templates/template1";

type TypeProp = {
  choice: number;
};

function AddTemplate() {
  const [templateChoice, setTemplateChoice] = useState(1);
  console.log("in add template");

  //useLocation to receive props
  const location = useLocation();
  console.log(location, "location", location.state);

  useEffect(() => {
    if (templateChoice == 1) {
      return;
    }
  }, []);

  const user_id = 1;
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
      <h1>Add Template</h1>
    </div>
  );
}

export default AddTemplate;

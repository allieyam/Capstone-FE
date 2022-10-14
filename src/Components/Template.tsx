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
  const [userWork, setUserWork] = useState([]);
  const [userEducation, setUserEducation] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState([]);

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

  function updateAll(name: string, value: string) {
    // if ((name = "name")) {
    //   setUserName(value);
    // } else if ((name = "email")) {
    //   setUserEmail(value);
    // } else if ((name = "contact")) {
    //   setUserEmail(value);
    // }
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
      <Template1
        username={userName}
        email={userEmail}
        keyskills={userSkills}
        work={userWork}
        education={userEducation}
        updateEducation={updateEducation}
        updateAll={updateAll}
        phone={userPhone}
        user={user_id}
      />
    </div>
  );
}

export default Template;

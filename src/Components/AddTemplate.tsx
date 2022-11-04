import React, { useEffect, useState, useContext } from "react";
import "../styling/App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../App";
type TypeProp = {
  choice: number;
};

function AddTemplate() {
  //useLocation to receive props

  const location = useLocation();

  const template_choice = location.state.templateChoice;
  const summary_user = location.state.summary;
  const template_name = location.state.templateName;
  const cv_id = location.state.cvId;
  const [templateChoice, setTemplateChoice] = useState(template_choice);
  const [userSummary, setUserSummary] = useState(summary_user);
  const [templateName, setTemplateName] = useState(template_name);
  const { getAccessTokenSilently }: any = useAuth0();
  const [cvId, setCvId] = useState(cv_id);

  const userId = Number(useContext(UserContext));
  // set state for one chosen out of the 3 templates
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userWork, setUserWork] = useState<any[]>([]);
  const [userEducation, setUserEducation] = useState<any[]>([]);
  const [userSkills, setUserSkills] = useState<any[]>([]);
  const [image, setImage] = useState("");
  const [userBlurb, setUserBlurb] = useState("");

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

    let userData = initialItems.data[0];
    setUserName(userData.name);
    setUserEmail(userData.email);
    setUserPhone(userData.contact);
    setUserWork(userData.workExperience);
    setUserEducation(userData.education);
    setUserSkills(userData.keySkills);
    setImage(userData.image);
  };

  const getUserSummary = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    console.log(cvId);
    //get user summary
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}/${userId}/cv`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((result) => {
        const job = result.data.find((item: any) => item.id === cvId);
        return job;
      })
      .then((response) => {
        console.log(response);
        if (response !== undefined) {
          setUserBlurb(response.summary);
          setTemplateName(response.name);
          console.log("resId", cvId);
          console.log(userSummary, userBlurb);

          if (response.summary === "" && userSummary !== undefined) {
            axios.put(
              `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
              {
                summary: userSummary,
                templateId: templateChoice,
                name: templateName,
                cvId: cvId,
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            setUserSummary(userSummary);
            console.log("run here 1");
          } else if (userBlurb !== "" && userSummary !== undefined) {
            axios.put(
              `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
              {
                summary: userBlurb,
                templateId: templateChoice,
                name: templateName,
                cvId: cvId,
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
            setUserSummary(userBlurb);
            console.log("run here 2", userSummary);
          } else if (userBlurb !== "" && userSummary === undefined) {
            setUserSummary(response.summary);
            console.log("run here 3");
          } else {
            setUserSummary("Please edit the summary");
            console.log("run here 3");
          }
        } else setUserSummary("Please edit the summary");
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
      case "summary":
        setUserSummary(value);
        break;
      default:
    }
  }

  useEffect(() => {
    getUserData();
    getUserSummary();
  }, [cvId, userBlurb]);

  return (
    <div>
      {(() => {
        if (templateChoice === 1) {
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
              userSummary={userSummary}
              userBlurb={userBlurb}
              templateName={templateName}
              templateChoice={templateChoice}
              cvId={cvId}
            />
          );
        } else if (templateChoice === 2) {
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
              userSummary={userSummary}
              userBlurb={userBlurb}
              templateName={templateName}
              templateChoice={templateChoice}
              cvId={cvId}
            />
          );
        } else if (templateChoice === 3) {
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
              userSummary={userSummary}
              userBlurb={userBlurb}
              templateName={templateName}
              templateChoice={templateChoice}
              cvId={cvId}
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

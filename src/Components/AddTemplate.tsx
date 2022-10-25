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
  //useLocation to receive props

  const location = useLocation();

  const template_choice = location.state.templateChoice;
  const summary_user = location.state.summary;
  const [templateChoice, setTemplateChoice] = useState(template_choice);
  const [userSummary, setUserSummary] = useState(summary_user);

  const { getAccessTokenSilently }: any = useAuth0();

  // const userId = Number(useContext(UserContext));
  const userId = 1;
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
    setImage(userData.image);
    setUserBlurb(userBlurb);
    // console.log(initialItems.data[0]);
  };

  // get the data from backend
  // if there is data:
  // case 1: if there is user summary and blurb - replace blurb with user summary, update it
  //case 3: if there is only user summary - just show user summary, and set it
  // case 2: if there is only blurb, just show blurb
  // if there is no data:
  // case 1: show please edit.

  const getUserSummary = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/${userId}/cv`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("response", response.data);
        setUserBlurb(response.data[0].summary);
        // })
        // .then(() => {
        if (response.data[0].summary === "" && userSummary !== null) {
          axios.put(
            `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
            {
              summary: userSummary,
              templateId: templateChoice,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUserSummary(userSummary);
          console.log("run here 1");
        } else if (response.data[0].summary !== null && userSummary !== null) {
          axios.put(
            `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
            {
              summary: userSummary,
              templateId: templateChoice,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setUserSummary(userSummary);
          console.log("run here 2");
        } else if (response.data[0].summary !== null && userSummary === null) {
          setUserSummary(response.data[0].summary);
          console.log("run here 3");
        } else {
          setUserSummary("Please edit the summary");
          console.log("run here 3");
        }
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
  }, []);

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
              userSummary={userSummary}
            />
          );
        } else if (templateChoice == 2) {
          return (
            <Template2
              username={"John Smith"}
              email={"john@john.com"}
              keyskills={[
                {
                  name: "Javascript",
                  description: "im really good at this",
                },
              ]}
              work={[
                {
                  place: "Apple",
                  position: "Marketing Executive",
                  description:
                    "Developed and executed online, social media, and print marketing strategies for new projects.",
                  date_ended: "20/10/2019",
                  date_started: "10/11/2016",
                },
                {
                  place: "Pear",
                  position: "Designer",
                  description:
                    "Created 3D models, renderings, and video animations.",
                  date_ended: "6/10/2016",
                  date_started: "7/6/2014",
                },
              ]}
              education={[
                {
                  place: "Orange",
                  level: "BSc in Computer Science (Hons)",
                  description: "Dean's List Candidate",
                  date_started: "10/3/2010",
                  date_ended: "6/3/2014",
                },
                {
                  place: "Mangosteen",
                  level: "'A'-levels",
                  description: "School Board Treasurer",
                  date_started: "1/1/2007",
                  date_ended: "31/12/2009",
                },
              ]}
              updateEducation={updateEducation}
              updateAll={updateAll}
              phone={userPhone}
              user={userId}
              updateSkill={updateSkill}
              updateWork={updateWork}
              image={image}
              userSummary={userSummary}
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
              userSummary={userSummary}
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

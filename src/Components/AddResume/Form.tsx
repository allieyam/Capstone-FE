import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
} from "react";
import InputForm from "./InputForm";
import "../../styling/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import { useAuth0 } from "@auth0/auth0-react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const { getAccessTokenSilently } = useAuth0();
  const [showNext, setShowNext] = useState(false);

  const userId = useContext(UserContext);
  const initialFormValues = [
    {
      place: "",
      description: "",
      date_started: "",
      date_ended: "",
    },
  ];
  type FormValue = typeof initialFormValues[number];
  const [formValues, setFormValues] = useState<FormValue[]>(initialFormValues);

  const initialWork = [
    {
      place: "",
      position: "",
      description: "",
      date_started: "",
      date_ended: "",
    },
  ];
  type WorkValue = typeof initialWork[number];
  const [workExperience, setWorkExperience] =
    useState<WorkValue[]>(initialWork);

  const [skills, setSkills] = useState("");
  const [skillDes, setSkillDes] = useState("");
  const initialSkill = [
    {
      name: "",
      description: "",
    },
  ];
  type AllSkill = typeof initialSkill[number];
  const [allSkills, setAllSkills] = useState<AllSkill[]>(initialSkill);

  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "contact":
        setContact(event.target.value);
        break;

      default:
    }
  };

  const handleSkill = (
    i: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAllSkills((currentSkills) => {
      const newSkills = currentSkills.map((allSkills, index) => {
        if (index === i) {
          return { ...allSkills, [event.target.name]: event.target.value };
        }
        return allSkills;
      });
      console.log(newSkills);
      return newSkills;
    });
    switch (event.target.name) {
      case "skills":
        setSkills(event.target.value);
        break;
      case "description":
        setSkillDes(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    // Send request to create new resume in backend
    await axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/${userId}`,
        {
          name,
          email,
          workExperience,
          education: formValues,
          keySkills: allSkills,
          contact,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        // Clear form state
        setName("");
        setEmail("");
        setWorkExperience(initialWork);
        setFormValues(initialFormValues);
        setContact("");
        setAllSkills(initialSkill);
        setShowNext(true);
      });
  };

  const addSkillfields = () => {
    setAllSkills([
      ...allSkills,
      {
        name: "",
        description: "",
      },
    ]);
  };

  let removeSkills = (index: number) => {
    let newSkill = [...allSkills];
    newSkill.splice(index, 1);
    setAllSkills(newSkill);
  };

  const handleSummary = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(event?.target.value);
  };

  useEffect(() => {
    setShowNext(false);
  }, []);

  return (
    <div>
      <div className="form">
        <InputForm
          name={name}
          contact={contact}
          email={email}
          summary={summary}
          education={formValues}
          skill={skills}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleSkill={handleSkill}
          allSkills={allSkills}
          addSkillfields={addSkillfields}
          removeSkills={removeSkills}
          setFormValues={setFormValues}
          formValues={formValues}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
          showNext={showNext}
          handleSummary={handleSummary}
        />
      </div>
    </div>
  );
}

export default Form;

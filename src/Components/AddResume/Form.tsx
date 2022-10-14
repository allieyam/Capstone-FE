import React, { useState, ChangeEvent, FormEvent } from "react";
import InputForm from "./InputForm";
import "../../styling/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const user_id = 2;

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

  const initialWork = [
    {
      place: "",
      position: "",
      description: "",
      date_started: "",
      date_ended: "",
    },
  ];
  type work = typeof initialWork[number];
  const [workExperience, setWorkExperience] = useState<work[]>(initialWork);
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
      case "summary":
        setSummary(event.target.value);
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
    console.log("clicked");

    // Send request to create new resume in backend
    await axios
      .post(`${process.env.REACT_APP_API_SERVER}`, {
        name,
        email,
        workExperience: workExperience,
        education: formValues,
        keySkills: allSkills,
        contact,
      })
      // // Send request to create new resume in backend
      // await axios
      //   .post(`${process.env.REACT_APP_API_SERVER}/${user_id}/cv`, {
      //     summary,
      //   })
      .then((res) => {
        // Clear form state
        setName("");
        setEmail("");
        setWorkExperience(initialWork);
        setFormValues(initialFormValues);
        setContact("");
        setAllSkills(initialSkill);
        // Navigate to listing-specific page after submitting form
        navigate(`/dashboard`);
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

  return (
    <div>
      <p>
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
          // handleEducation={handleEducation}
          // addFormFields={addFormFields}
          // removeFormFields={removeFormFields}
        />
      </p>
    </div>
  );
}

export default Form;

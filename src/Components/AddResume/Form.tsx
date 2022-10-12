import React, { useState, ChangeEvent, FormEvent } from "react";
import InputForm from "./InputForm";
import "../../styling/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [dateStarted, setDateStarted] = useState("");
  const [dateEnded, setDateEnded] = useState("");

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
      skills: "",
      description: "",
    },
  ];
  type AllSkill = typeof initialSkill[number];
  const [allSkills, setAllSkills] = useState<AllSkill[]>(initialSkill);
  const initialWork = [
    {
      place: "",
      description: "",
      date_started: "",
      date_ended: "",
    },
  ];
  type work = typeof initialWork[number];
  const [workExperience, setWorkExperience] = useState<work[]>(initialWork);

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

  const handleEducation = (
    i: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // const newFormValues: FormValue[] = [...formValues];
    // newFormValues[i][event.target.name] = event.target.value;
    setFormValues((currentFormValues) => {
      const newFormValues = currentFormValues.map((formValue, index) => {
        if (index === i) {
          return { ...formValue, [event.target.name]: event.target.value };
        }
        return formValue;
      });
      console.log("newFormValues", newFormValues);
      return newFormValues;
    });
    switch (event.target.name) {
      case "place":
        setPlace(event.target.value);
        break;
      case "date_started":
        setDateStarted(event.target.value);
        break;
      case "date_ended":
        setDateEnded(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
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
      case "skilldes":
        setSkillDes(event.target.value);
        break;
      default:
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("clicked");

    // Send request to create new listing in backend
    await axios
      .post(`${process.env.REACT_APP_API_SERVER}`, {
        name,
        email,
        workExperience: workExperience,
        education: formValues,
        keySkills: allSkills,
        contact,
      })
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

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        place: "",
        description: "",
        date_started: "",
        date_ended: "",
      },
    ]);
  };

  const addSkillfields = () => {
    setAllSkills([
      ...allSkills,
      {
        skills: "",
        description: "",
      },
    ]);
  };

  let removeFormFields = (index: number) => {
    let newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
  };

  let removeSkills = (index: number) => {
    let newSkill = [...allSkills];
    newSkill.splice(index, 1);
    setAllSkills(newSkill);
  };

  console.log(formValues);

  return (
    <div>
      <p>
        <InputForm
          name={name}
          contact={contact}
          email={email}
          // workExperience={workExperience}
          education={formValues}
          skill={skills}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleEducation={handleEducation}
          addFormFields={addFormFields}
          removeFormFields={removeFormFields}
          formValues={formValues}
          handleSkill={handleSkill}
          allSkills={allSkills}
          addSkillfields={addSkillfields}
          removeSkills={removeSkills}
          workExperience={workExperience}
          setWorkExperience={setWorkExperience}
        />
      </p>
    </div>
  );
}

export default Form;

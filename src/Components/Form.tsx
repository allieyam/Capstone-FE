import React, { useState, ChangeEvent, FormEvent } from "react";
import InputForm from "./InputForm";
import "../styling/App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [education, setEducation] = useState("");
  const [contact, setContact] = useState("");
  // const [skill, setSkill] = useState<string[]>([]);
  const [skill, setSkill] = useState("");
  const navigate = useNavigate();

  // const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedOptions = event.currentTarget.selectedOptions;

  //   const newSkill = [];
  //   for (let i = 0; i < selectedOptions.length; i++) {
  //     newSkill.push(selectedOptions[i].value);
  //   }

  //   setSkill(newSkill);
  // };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "work":
        setWorkExperience(event.target.value);
        break;
      case "education":
        setEducation(event.target.value);
        break;
      case "contact":
        setContact(event.target.value);
        break;
      case "skill":
        setSkill(event.target.value);
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
        workExperience,
        education,
        contact,
        skill,
      })
      .then((res) => {
        // Clear form state
        setName("");
        setEmail("");
        setWorkExperience("");
        setEducation("");
        setContact("");
        setSkill("");
        // Navigate to listing-specific page after submitting form
        navigate(`/dashboard`);
      });
  };

  return (
    <div>
      <p>
        <InputForm
          name={name}
          contact={contact}
          email={email}
          workExperience={workExperience}
          education={education}
          skill={skill}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          // handleSelect={handleSelect}
        />
      </p>
    </div>
  );
}

export default Form;

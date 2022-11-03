import React, { useState, MouseEvent, useEffect, useContext } from "react";
import "../styling/App.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../App";

function Template() {
  const location = useLocation();
  const summary_user = location.state;
  const [userSummary, setUserSummary] = useState(summary_user);
  const [templateName, setTemplateName] = useState("");
  const [templateChoice, setTemplateChoice] = useState(0);
  const { getAccessTokenSilently }: any = useAuth0();
  const userId = Number(useContext(UserContext));
  const [cvId, setCvId] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemplateName(event.target.value);
  };

  const handleClick1 = async (e: MouseEvent) => {
    setTemplateChoice(1);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
      {
        templateId: 1,
        summary: userSummary,
        name: templateName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setCvId(response.data[0].id);
    console.log("resId", cvId);
  };
  const handleClick2 = async (e: MouseEvent) => {
    setTemplateChoice(2);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
      {
        summary: userSummary,
        templateId: 2,
        name: templateName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setCvId(response.data[0].id);
    console.log("resId", cvId);
  };
  const handleClick3 = async (e: MouseEvent) => {
    setTemplateChoice(3);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
      {
        summary: userSummary,
        templateId: 3,
        name: templateName,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setCvId(response.data[0].id);
    console.log("resId", cvId);
  };

  return (
    <div className="template-big">
      <input
        className="text-lg appearance-none text-gray-700 border focus:border-gray-500"
        type="text"
        placeholder="name"
        value={templateName}
        onChange={handleChange}
      ></input>
      <div className="template-ok">
        <div className="template-button-container">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template1-button"
              onClick={(e) => handleClick1(e)}
            >
              Template 1
            </button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template2-button"
              onClick={(e) => handleClick2(e)}
            >
              Template 2
            </button>
          </motion.a>
          <motion.a
            whileHover={{ rotate: 360 }}
            whileTap={{ scale: 0.8 }}
            style={{ x: 100 }}
          >
            <button
              className="template3-button"
              onClick={(e) => handleClick3(e)}
            >
              Template 3
            </button>
          </motion.a>
        </div>
        <Link
          to="/add-template"
          className="add-template-button"
          state={{
            templateChoice: templateChoice,
            summary: userSummary,
            templateName: templateName,
          }}
        >
          Add a Template
        </Link>
      </div>
    </div>
  );
}

export default Template;

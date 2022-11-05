import React, { useContext, useState, useEffect } from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";
// import Template from "./Components/Template";
import { UserContext } from "./App";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "98.css";
import graph from "./styling/graph.jpg";
import whale from "./styling/whale.gif";
import powerbook from "./styling/ads/powerbook.gif";
import pet from "./styling/ads/williepetstore.png";
import click from "./styling/ads/willieclick.jpg";
import congrats from "./styling/ads/congratulations.gif";
import first from "./styling/ads/firstad.png";
import smiley from "./styling/ads/smiley.jpg";

function Dashboard() {
  const userId = useContext(UserContext);
  const [resume, setResume] = useState([]);
  const { getAccessTokenSilently }: any = useAuth0();

  const getInitialData = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        setResume(response.data);
      });
  };

  useEffect(() => {
    if (userId !== "") {
      getInitialData();
    }
  }, [userId]);

  console.log(resume);

  return (
    <div className="dashboard-container">
      <div className="graph-container">
        <img src={congrats} className="congrats" />
        Job Vacancy by Industry and Occupational Group, Quarterly
        <embed
          width="600"
          height="300"
          src="https://data.gov.sg/dataset/job-vacancy-by-industry-and-occupational-group-quarterly/resource/ed6ca640-a1e6-4435-b06a-493981a620cd/view/321179ff-1985-4e82-91a8-9f3adeb53e90"
        />
        <div className="graph-header">Re-entry into Employment Rate</div>
        <img src={graph} width="600" height="300" />
      </div>
      <div className="contents-container">
        <ul className="tree-view text-xl">
          <li>Table of Contents</li>
          <li>
            Dashboard
            <ul>
              <li>
                <Link to="/template">View your templates</Link>
              </li>
              <li>
                <Link to="/form">Add details here</Link>
              </li>
              <li>
                <Link to="/userp">View your details</Link>
              </li>
            </ul>
          </li>
        </ul>
        <img src={whale} className="whale" />
      </div>
      <div className="ad-container">
        <img src={first} className="first" />
        <img src={powerbook} className="powerbook" />
        <img src={pet} className="petstore" />
        <img src={click} className="clickad" />
        <img src={smiley} className="smiley" />
      </div>
    </div>
  );
}

export default Dashboard;

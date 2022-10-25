import React, { useContext, useState, useEffect } from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";
// import Template from "./Components/Template";
import { UserContext } from "./App";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import graph from "./styling/graph.jpg";

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
      <p>Dashboard</p>
      <embed
        width="600"
        height="300"
        src="https://data.gov.sg/dataset/job-vacancy-by-industry-and-occupational-group-quarterly/resource/ed6ca640-a1e6-4435-b06a-493981a620cd/view/321179ff-1985-4e82-91a8-9f3adeb53e90"
      />
      <div className="graph-header">
        Job Vacancy by Industry and Occupational Group, Quarterly
      </div>
      <img src={graph} />
      <Link to="/template">View your templates</Link>
      <br />
      <Link to="/form">Add details here</Link>
      <br />
      <Link to="/userp">View your details</Link>
      {/* <br />
      <Link to="/brain">View the ML here</Link> */}
    </div>
  );
}

export default Dashboard;

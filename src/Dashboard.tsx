import React, { useContext, useState, useEffect } from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";
// import Template from "./Components/Template";
import { UserContext } from "./App";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

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
    <div>
      <p>Dashboard</p>
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

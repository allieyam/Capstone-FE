import React, { useState, createContext, useEffect } from "react";
import "./styling/App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";

export const UserContext = createContext("");

function App() {
  const [resume, setResume] = useState("");

  const { user, getAccessTokenSilently }: any = useAuth0();
  console.log(user);

  const [userId, setUserId] = useState("");

  const getUserInfo = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    const userInfo = await axios.post(
      `${process.env.REACT_APP_API_SERVER}`,
      {
        name: user.nickname,
        email: user.email,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(userInfo);
    setUserId(userInfo.data[0].id);
    const resumeInfo = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userInfo.data[0].id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setResume(resumeInfo.data);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  //grab user
  //check the user whether exists in the database
  //backend use findOrCreate
  //set the user
  //post data

  console.log("APp userId", userId);
  return (
    <UserContext.Provider value={userId}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="component-container">
            <Outlet />
          </div>
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default withAuthenticationRequired(App);

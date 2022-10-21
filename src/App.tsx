import React, { useState, createContext, useEffect, useCallback } from "react";
import "./styling/App.css";
import { Outlet } from "react-router-dom";
// import axios from "axios";
import Navbar from "./Components/Navigation/Navbar";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import axios from "axios";
import { access } from "fs";

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
    setUserId(userInfo.data[0].id);
    const resumeInfo = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userInfo.data[0].id}/cv`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setResume(resumeInfo.data);
    {
      const resumeInfo = await axios.get(
        `${process.env.REACT_APP_API_SERVER}/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(resumeInfo);
      setResume(resumeInfo.data);
    }
  };

  // const getUserInfo = async () => {
  //   const accessToken = await getAccessTokenSilently({
  //     audience: process.env.REACT_APP_AUDIENCE,
  //     scope: process.env.REACT_APP_SCOPE,
  //   });
  //   const userInfo = await axios.post(
  //     `${process.env.REACT_APP_API_SERVER}`,
  //     {
  //       name: user.nickname,
  //       email: user.email,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     }
  //   );
  // };

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
          <Outlet />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default withAuthenticationRequired(App);

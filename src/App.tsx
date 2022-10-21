import React, { useState, createContext, useEffect } from "react";
import "./styling/App.css";
import { Outlet } from "react-router-dom";
// import axios from "axios";
import Navbar from "./Components/Navigation/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const UserContext = createContext("");

function App() {
  // const [summary, setSummary] = useState("");
  const [resume, setResume] = useState([]);

  const { user, getAccessTokenSilently }: any = useAuth0();
  const [userId, setUserId] = useState("");

  console.log(user);
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

  useEffect(() => {
    getUserInfo();
  }, []);

  console.log(userId);
  console.log(resume);
  return (
    <UserContext.Provider value={userId}>
      <div className="App">
        <Navbar />
        <header className="App-header">
          {/* <h1 className="text-3xl font-bold text-purple-800 border-dotted">
            Hi!{" "}
          </h1>
          <br /> */}
          <Outlet />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;

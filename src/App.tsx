// import React, { useState, useEffect } from "react";
import "./styling/App.css";
import { Outlet } from "react-router-dom";
// import axios from "axios";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  // const navigate = useNavigate();
  //   const [userId, setUserId] = useState("");
  //   const [resume, setResume] = useState([]);

  // const getInitialData = async () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_SERVER}/${userId}`)
  //     .then((response) => {
  //       console.log("response", response);
  //       setResume(response.data);
  //     });
  // };

  // const { user, logout } = useAuth0();

  // const getUserInfo = async () => {
  //   const userInfo = await axios.post(
  //     `${process.env.REACT_APP_API_SERVER}/users`,
  //     {
  //       name: user.nickname,
  //       email: user.email,
  //     }
  //   );
  //   setUserId(userInfo.data[0].id);
  //   const resumeInfo = await axios.get(
  //     `${process.env.REACT_APP_API_SERVER}/${userInfo.data[0].id}`
  //   );
  //   setResume(resumeInfo.data);
  // };

  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 className="text-3xl font-bold text-purple-800 border-dotted">
          Fill in your details!
        </h1>
        <br />
        <Outlet />
      </header>
    </div>
  );
}

export default App;

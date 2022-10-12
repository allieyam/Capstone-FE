import "../styling/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile() {
  const [userProfile, setUserProfile] = useState([]);

  const getInitialData = async () => {
    axios.get(`${process.env.REACT_APP_API_SERVER}`).then((response) => {
      console.log("response", response);
      setUserProfile(response.data);
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      {userProfile && userProfile.length > 0
        ? userProfile.map((userProfile, index) => {
            return <div key={index}>{userProfile.work}</div>;
          })
        : null}{" "}
    </div>
  );
}

export default UserProfile;

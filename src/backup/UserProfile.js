import "../styling/App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UpImage from "../Components/Upload/UploadImage";

function UserProfile() {
  const [userProfiles, setUserProfile] = useState([]);

  const getInitialData = async () => {
    axios.get(`${process.env.REACT_APP_API_SERVER}`).then((response) => {
      console.log("response", response);
      setUserProfile(response.data);
    });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  console.log(userProfiles);

  return (
    <div>
      <UpImage />
      {userProfiles && userProfiles.length > 0
        ? userProfiles.map((profile, index) => {
            console.log(profile);
            return <div key={index}>{profile.name}</div>;
          })
        : null}{" "}
    </div>
  );
}

export default UserProfile;

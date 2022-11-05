import React, { useState, useContext } from "react";
import { UserContext } from "../../App";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "../../styling/App.css";

const UpImage = ({ url, setUrl, userProfiles }) => {
  const [image, setImage] = useState("");
  const { getAccessTokenSilently } = useAuth0();
  const userId = useContext(UserContext);
  console.log(userId);
  const uploadImage = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tvoyiros");
    data.append("cloud_name", "dz4enslok");
    fetch("  https://api.cloudinary.com/v1_1/dz4enslok/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      });
    // Send request to create new picture in backend
    await axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/${userId}`,
        {
          name: userProfiles.name,
          email: userProfiles.email,
          workExperience: userProfiles.workExperience,
          education: userProfiles.education,
          keySkills: userProfiles.keySkills,
          contact: userProfiles.contact,
          image: url,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .catch((err) => console.log(err));
  };

  console.log(url);

  return (
    <div className="pcenter">
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <br />
        <button onClick={uploadImage}>Upload</button>
      </div>
      <br />
    </div>
  );
};
export default UpImage;

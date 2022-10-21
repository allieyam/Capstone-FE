import "../../styling/App.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UpImage from "./UploadImage";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../App";

function UserProfile() {
  const userId = useContext(UserContext);
  const [userProfiles, setUserProfile] = useState([]);
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [url, setUrl] = useState("");

  const getInitialData = async () => {
    console.log("getinitialdata", userId);
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    await axios
      .get(`${process.env.REACT_APP_API_SERVER}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        console.log("response", response.data[0]);
        setUserProfile(response.data[userId - 1]);
      });
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
        // style="background-image:url('https://source.unsplash.com/1L71sPT5XKc');"
      >
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              {userProfiles.image === null ? (
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png)`,
                  }}
                ></div>
              ) : (
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${userProfiles.image})` }}
                ></div>
              )}

              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {" "}
                {userProfiles.name}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>{" "}
                What you do
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>{" "}
                {userProfiles.email}
              </p>
              <p className="pt-8 text-sm">
                Totally optional short description about yourself, what you do
                and so on.
              </p>

              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Get In Touch
                </button>
              </div>

              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <title>Facebook</title>

                <title>Twitter</title>

                <title>GitHub</title>

                <title>Unsplash</title>

                <title>Dribbble</title>

                <title>Instagram</title>

                <title>YouTube</title>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5">
            {/* <img
              src='${url}'
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            /> */}
            <img src={url} />
          </div>
        </div>
      </div>
      <UpImage url={url} setUrl={setUrl} userProfiles={userProfiles} />
    </div>
  );
}

export default UserProfile;
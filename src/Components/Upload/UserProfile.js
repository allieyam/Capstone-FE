import "../../styling/App.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import UpImage from "./UploadImage";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "../../App";
import resumebg from "../../styling/windows.jpg";

function UserProfile() {
  const userId = useContext(UserContext);
  const [userProfiles, setUserProfile] = useState([]);
  const { getAccessTokenSilently } = useAuth0();
  const [url, setUrl] = useState("");
  const [cardText, setCardText] = useState("");

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
        console.log("response", response.data);
        const allData = response.data;
        console.log(allData.length);
        //loop thru the response and set user only if the id matches
        for (let i = 0; i < allData.length; i++) {
          if (allData[i].id === userId) {
            console.log(response.data[i].id);
            setUserProfile(response.data[i]);
            console.log(i);
            console.log(userProfiles);
            i++;
          }
        }
        return userProfiles;
      });
  };

  console.log(userProfiles);
  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
        style={{
          backgroundImage: `url(${resumebg})`,
        }}
      >
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div
                className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                style={{
                  backgroundImage:
                    userProfiles.image === null
                      ? `url(https://spng.subpng.com/20180920/cpy/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66dae9957.9805960115374598217152.jpg)`
                      : `url(${userProfiles.image})`,
                }}
              ></div>
              <h1 className="text-3xl font-bold pt-8 lg:pt-0">
                {" "}
                {userProfiles.name === null ? "USER" : userProfiles.name}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"></path>{" "}
                </svg>{" "}
                {userProfiles.contact === null ? "PHONE" : userProfiles.contact}
              </p>
              <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-green-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
                </svg>{" "}
                {userProfiles.email}
              </p>
              <p className="pt-8 text-sm">
                Welcome to our app! Feel free to use the add your explore and
                create your very first Professional Resume.
              </p>

              <div className="pt-12 pb-8">
                <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                  Contact me
                </button>
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

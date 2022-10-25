import React, { useEffect, useState } from "react";
import "./styling/App.css";
// import Background from "./styling/background.jpg";
import desktop from "./styling/desktop.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import "./styling/landing.css";
import windows from "./styling/windows.png";
import { motion } from "framer-motion";
import whale from "./styling/whale.png";

export const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

function Landing() {
  const { loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(false);

  // Background style:
  const heroBgImgStyle = {
    backgroundColor: "#018184",
  };

  const showPopup = () => {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  };

  return (
    <div
      className="w-full flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4 bg-no-repeat bg-cover bg-fixed bg-center"
      style={heroBgImgStyle}
    >
      <h1 className="text-white flex flex-col text-center">
        <span className="text-6xl lg:text-8xl font-light">Wallie</span>
        <span className="text-5xl lg:text-3xl font-bold">
          Build your resume with us
        </span>
      </h1>
      <div>
        <motion.div onClick={showPopup}>
          <img src={whale} className="logo" />
        </motion.div>
        {show ? (
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">Welcome</div>
            </div>
            <div className="window-body">
              <p> Click login to create your resume!:</p>
              <ul>
                <li>Fill in your details</li>
                <li>Choose your template of choice</li>
                <li>Download once it is done!</li>
              </ul>
            </div>
            <div className="status-bar">
              <p className="status-bar-field">Press F1 for help</p>
              <p className="status-bar-field">Wallie</p>
              <p className="status-bar-field">CPU Usage: 20%</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="block text-center mt-4">
        <button
          className="p-4 bg-emerald-700 text-white rounded-full py-1 font-bold text-md"
          onClick={() =>
            loginWithRedirect({
              redirectUri: "http://localhost:3001/dashboard",
            })
          }
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Landing;

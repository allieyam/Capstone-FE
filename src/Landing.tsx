import React, { useEffect } from "react";
import "./styling/App.css";
import Background from "./background.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./styling/landing.css";

function Landing() {
  // const navigate = useNavigate();
  // const { isAuthenticated }: any = useAuth0();
  const { loginWithRedirect } = useAuth0();

  // Background style:
  const heroBgImgStyle = {
    backgroundImage: "url(" + Background + ")",
  };
  return (
    // <div className="lg:flex">
    <div
      className="w-full flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4 bg-no-repeat bg-cover bg-fixed bg-center"
      style={heroBgImgStyle}
    >
      <h1 className="text-white flex flex-col text-center">
        <span className="text-6xl lg:text-8xl font-light">Resume</span>
        <span className="text-5xl lg:text-3xl font-bold">
          Build your resume with us
        </span>
      </h1>

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

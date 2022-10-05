import React from "react";
import "./styling/App.css";
import Background from "./background.jpg";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  // Background style:
  const heroBgImgStyle = {
    backgroundImage: "url(" + Background + ")",
  };
  return (
    // <div className="lg:flex">
    <div
      className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:justify-start lg:items-end min-h-screen bg-emerald-700 p-4 bg-no-repeat bg-cover bg-fixed bg-center"
      style={heroBgImgStyle}
    >
      <h1 className="text-white flex flex-col text-center lg:text-right lg:mt-12">
        <span className="text-6xl lg:text-8xl font-light">Resume</span>
        <span className="text-5xl lg:text-3xl font-bold">
          Build your resume with us
        </span>
      </h1>

      <div className="block lg:hidden text-center mt-4">
        <button
          onClick={() => {
            navigate(`dashboard`);
          }}
          className="p-4 bg-emerald-700 text-white rounded-full py-1 font-bold text-md"
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Landing;

import React, { useEffect, useState, useRef, Suspense } from "react";
import desktop from "./styling/desktop.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import "./styling/landing.css";
import windows from "./styling/windows.png";
// import { motion } from "framer-motion";
import "./styling/styles.css";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { Shapes } from "./styling/Shapes";

export const transition = {
  type: "spring",
  duration: 0.7,
  bounce: 0.2,
};

function Landing() {
  const { loginWithRedirect } = useAuth0();
  const [show, setShow] = useState(false);
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Background style:
  const heroBgImgStyle = {
    backgroundImage: "url(" + desktop + ")",
  };

  const showPopup = () => {
    if (show === false) {
      setShow(true);
    } else setShow(false);
  };

  return (
    <div
      className=" w-full flex flex-col justify-center items-center min-h-screen bg-emerald-700 p-4 bg-no-repeat bg-cover bg-fixed bg-center"
      style={heroBgImgStyle}
    >
      <h1 className="text-white flex flex-col text-center">
        <span className="text-6xl lg:text-8xl font-light">Resume</span>
        <span className="text-5xl lg:text-3xl font-bold">
          Build your resume with us
        </span>
      </h1>
      <div>
        <motion.div onClick={showPopup}>
          <img src={windows} className="logo" />
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
      {/* <div className="block text-center mt-4">
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
      </div> */}
      <div className="outline-none">
        <MotionConfig transition={transition}>
          <motion.button
            onClick={() =>
              loginWithRedirect({
                redirectUri: "http://localhost:3001/dashboard",
              })
            }
            ref={ref}
            initial={false}
            animate={isHover ? "hover" : "rest"}
            whileTap="press"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.5 },
              press: { scale: 1.4 },
            }}
            onHoverStart={() => {
              resetMousePosition();
              setIsHover(true);
            }}
            onHoverEnd={() => {
              resetMousePosition();
              setIsHover(false);
            }}
            onTapStart={() => setIsPress(true)}
            onTap={() => setIsPress(false)}
            onTapCancel={() => setIsPress(false)}
            onPointerMove={(e) => {
              mouseX.set(e.clientX - bounds.x - bounds.width / 2);
              mouseY.set(e.clientY - bounds.y - bounds.height / 2);
            }}
          >
            <motion.div
              className="shapes"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <div className="navy blush" />
              <div className="yellow blush" />
              <div className="container">
                <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isPress={isPress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense>
              </div>
            </motion.div>
            <motion.div
              variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
              className="label"
            >
              Login
            </motion.div>
          </motion.button>
        </MotionConfig>
      </div>
    </div>
  );
}

export default Landing;

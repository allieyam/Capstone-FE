import React, { useState } from "react";
import "./styling/App.css";
import { Outlet } from "react-router-dom";
// import axios from "axios";
import Navbar from "./Components/Navigation/Navbar";

function App() {
  const [summary, setSummary] = useState("");

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1 className="text-3xl font-bold text-purple-800 border-dotted">
          Hi!{" "}
        </h1>
        <br />
        <Outlet />
      </header>
    </div>
  );
}

export default App;

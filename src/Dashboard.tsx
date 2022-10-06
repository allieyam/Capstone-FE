import React from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";
import Template from "./Components/Template";

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="/template">View your templates</Link>
      <br />
      <Link to="/form">Add details here</Link>
    </div>
  );
}

export default Dashboard;

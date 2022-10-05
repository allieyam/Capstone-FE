import React from "react";
import "./styling/App.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <p>Dashboard</p>
      <Link to="template">Template</Link>
    </div>
  );
}

export default Dashboard;

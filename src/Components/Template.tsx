import React from "react";
import "../styling/App.css";
import AddTemplate from "./AddTemplate";
import { Link } from "react-router-dom";

// import { Template1 } from "../Components/Templates/template1";

function Template() {
  return (
    <div>
      <p>Template 1</p>
      <p>Template 2</p>
      <p>Template 3</p>
      <Link to="add-template">
        <AddTemplate />
      </Link>
    </div>
  );
}

export default Template;

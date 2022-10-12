import React from "react";
import "../styling/App.css";
import AddTemplate from "./AddTemplate";
import { Link } from "react-router-dom";
import { UserTypes } from "../Components/types";
import Template1 from "./Templates/template1";
import Template2 from "./Templates/template2";
import Template3 from "./Templates/template3";

// import { Template1 } from "../Components/Templates/template1";

function Template() {
  return (
    <div>
      <p>Template 1</p>
      {/* <Template1
        name={"allie"}
        email={"allie@allie.com"}
        keyskills={[
          { name: "python", description: "im good at this" },
          { name: "javascript", description: "im good at this too" },
        ]}
        work={[
          {
            place: "apple",
            description: "i worked at apple",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "pear",
            description: "i worked at pear",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        education={[
          {
            place: "orange",
            description: "i studient at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studient at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        phone={"1234 5678"}
      /> */}
      <p>Template 2</p>
      {/* <Template2
        name={"allie"}
        email={"allie@allie.com"}
        keyskills={[
          { name: "python", description: "im good at this" },
          { name: "javascript", description: "im good at this too" },
        ]}
        work={[
          {
            place: "apple",
            description: "i worked at apple",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "pear",
            description: "i worked at pear",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        education={[
          {
            place: "orange",
            description: "i studient at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studient at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        phone={"1234 5678"}
      /> */}
      <p>Template 3</p>
      {/* <Template3
        name={"allie"}
        email={"allie@allie.com"}
        keyskills={[
          { name: "python", description: "im good at this" },
          { name: "javascript", description: "im good at this too" },
        ]}
        work={[
          {
            place: "apple",
            description: "i worked at apple",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "pear",
            description: "i worked at pear",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        education={[
          {
            place: "orange",
            description: "i studient at orange",
            date_started: "date started",
            date_ended: "date started",
          },
          {
            place: "mangosteen",
            description: "i studient at mangosteen",
            date_started: "date started",
            date_ended: "date started",
          },
        ]}
        phone={"1234 5678"}
      /> */}
      <Link to="add-template">
        Add a Template
        <AddTemplate />
      </Link>
    </div>
  );
}

export default Template;

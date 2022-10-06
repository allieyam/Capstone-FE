import React, { MouseEvent, useState } from "react";

import "../styling/App.css";

function Form() {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: MouseEvent) => {
    console.log("clicked");
  };
  return (
    <div>
      <p>Form</p>
      <button onClick={(e) => handleSubmit(e)}></button>
    </div>
  );
}

export default Form;

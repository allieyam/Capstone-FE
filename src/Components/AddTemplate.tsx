import React, { useEffect, useState } from "react";
import "../styling/App.css";
import axios from "axios";

function AddTemplate() {
  const [templateChoice, setTemplateChoice] = useState(1);
  useEffect(() => {
<<<<<<< HEAD
    if (templateChoice == 1) {
      return;
    }
  }, []);

  return (
    <div>
      <h1>Add Template</h1>
    </div>
  );
=======
    getUserData();
  });
  return <div>{/* <p>Add Template</p> */}</div>;
>>>>>>> main
}

export default AddTemplate;

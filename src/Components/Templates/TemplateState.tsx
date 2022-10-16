import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

export default function TemplateState() {
  const [name, setName] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      default:
    }
  };

  return <div>TemplateState</div>;
}

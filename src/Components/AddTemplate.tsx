import React, { useEffect } from "react";
import "../styling/App.css";
import axios from "axios";

function AddTemplate() {
  const user_id = 1;
  const getUserData = async () => {
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${user_id}`
    );

    let userData = initialItems.data[0];
    console.log(
      initialItems.data,
      userData,
      "initial data in get wishlist items"
    );
  };

  useEffect(() => {
    getUserData();
  });
  return <div>{/* <p>Add Template</p> */}</div>;
}

export default AddTemplate;

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export default function Summary() {
  const { getAccessTokenSilently }: any = useAuth0();
  const [userCV, setUserCV] = useState<any[]>([]);

  const userId = Number(useContext(UserContext));

  const getUserCV = async () => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let initialItems = await axios.get(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // let userData = initialItems.data[0];
    setUserCV(initialItems.data);
    console.log("user", userCV);
  };

  useEffect(() => {
    getUserCV();
  }, [userId]);

  const handleDelete = async (id: number, templateId: number) => {
    const accessToken = await getAccessTokenSilently({
      audience: process.env.REACT_APP_AUDIENCE,
      scope: process.env.REACT_APP_SCOPE,
    });
    let response = await axios.delete(
      `${process.env.REACT_APP_API_SERVER}/${userId}/cv`,
      {
        data: { cvId: id, templateId: templateId },

        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setUserCV(response.data);
  };

  return (
    <div>
      {userCV.map((onecv, index) => (
        <div key={index} className={`templatecontainer${onecv.templateId}`}>
          <Link
            style={{
              display: "inline-block",
              margin: "1rem 0",
              float: "left",
              justifyContent: "space-between",
              padding: "0rem 0.5rem",
              textDecoration: "none",
            }}
            to={`/add-template`}
            state={{ templateChoice: onecv.templateId, cvId: onecv.id }}
            key={index}
          >
            {onecv.name}
            {index + 1}
          </Link>
          <br />
          <button onClick={() => handleDelete(onecv.id, onecv.templateId)}>
            Delete{" "}
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

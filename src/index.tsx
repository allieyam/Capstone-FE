import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styling/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Template from "./Components/Template";
import AddTemplate from "./Components/AddTemplate";
import Form from "../src/Components/AddResume/Form";
import TemplateEdit from "./Components/Navigation/TemplateEdit";
import UserProfile from "./Components/Upload/UserProfile";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Auth0Provider
    // domain={process.env.REACT_APP_DOMAIN || ""}
    // clientId={process.env.REACT_APP_CLIENTID || ""}
    domain="dev-pq772rssbtn28kif.us.auth0.com"
    clientId="IDtf5Qn4lnusn83NYdly6cxWR4MqqPNW"
    redirectUri={process.env.REACT_APP_REDIRECT_URI}
    audience={process.env.REACT_APP_AUDIENCE}
    scope={process.env.REACT_APP_SCOPE}
  >
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/" element={<App />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="form" element={<Form />} />
          <Route path="userp" element={<UserProfile />} />
          <Route path="template" element={<Template />} />
          <Route path="add-template" element={<AddTemplate />} />
          <Route path="edit-template" element={<TemplateEdit />} />
          <Route path="*" element={"Nothing here!"} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);

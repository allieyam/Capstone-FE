import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Template from "./Components/Template";
import AddTemplate from "./Components/AddTemplate";
import Form from "./Components/AddResume/Form";
import UserProfile from "./backup/UserProfile";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="form" element={<Form />} />
        <Route path="userp" element={<UserProfile />} />
        <Route path="template" element={<Template />}>
          <Route path="add-template" element={<AddTemplate />} />
        </Route>
        <Route path="*" element={"Nothing here!"} />
      </Route>
    </Routes>
  </BrowserRouter>
);
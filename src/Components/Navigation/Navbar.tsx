import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styling/App.css";

export default function Navbar() {
  const { logout } = useAuth0();

  return (
    <div className="nav-container">
      <nav>
        <div className="title-bar">
          <div className="dropdown inline-block relative items-center pl-2">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 inline-flex items-center ">
              <span className="title-bar-controls">Browse</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </button>

            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 divide-y-2 divide-slate-700">
              <li className="">
                <Link
                  to="/userp"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  User Profile
                </Link>
              </li>
              <li className="">
                <Link
                  to="/dashboard"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/summary"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  Summary
                </Link>
              </li>
              <li>
                <Link
                  to="/form"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  Form
                </Link>
              </li>
              <li>
                <Link
                  to="/template"
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="title-bar-controls "
            id="logout-button"
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}

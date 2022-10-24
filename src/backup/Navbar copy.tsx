import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  return (
    <div>
      <nav
        className="items-center justify-start flex-wrap p-5"
        style={{
          backgroundColor: "rgb(148,148,148)",
        }}
      >
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <div className="dropdown inline-block relative">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                  <span className="mr-1">Dropdown</span>
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                  <li>
                    <Link to="/userp" className=" text-white hover:underline">
                      User Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className=" text-white hover:underline"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/form" className=" text-white hover:underline">
                      Form
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/template"
                      className=" text-white hover:underline"
                    >
                      Templates
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
            <button
              type="button"
              className=" text-white hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 absolute top-5 right-1"
              id="logout-button"
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

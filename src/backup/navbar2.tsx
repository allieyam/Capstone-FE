import "./navbar2.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export default function Navbar2() {
  const { logout } = useAuth0();

  return (
    <div>
      <nav
        className="items-center justify-start flex-wrap p-5"
        style={{
          backgroundColor: "rgb(148,148,148)",
        }}
      >
        <div className="flex items-center">
          <div className="dropdown inline-block relative items-center">
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
              <li className="">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  One
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Two
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Three is the magic number
                </a>
              </li>
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
      </nav>
    </div>
  );
}

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth0();

  return (
    <div>
      <nav className="items-center justify-start flex-wrap bg-teal-500 p-5">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>Logo here</li>
              <li>
                <Link to="/dashboard" className=" text-white hover:underline">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/form" className=" text-white hover:underline">
                  Form
                </Link>
              </li>
              <li>
                <Link to="/template" className=" text-white hover:underline">
                  Templates
                </Link>
              </li>
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;

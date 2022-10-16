import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="items-center justify-start flex-wrap bg-teal-500">
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
                className=" text-sm leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white absolute top-4 right-1"
                id="logout-button"
                onClick={() => {
                  navigate("/");
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

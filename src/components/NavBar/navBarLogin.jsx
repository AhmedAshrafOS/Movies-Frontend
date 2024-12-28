import React, { useState } from "react";
import fawryLogo from "../../assets/logo1.png";
import "./navbar.css"; 
import { useNavigate } from "react-router-dom";

const NavBarLogin = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  const navigate = useNavigate();
  return (
    <div className="navbar  justify-around  bg-gradient-to-t from-transparent to-black/90">
     
      <div className="">
        <img
          style={{ cursor: "pointer" }}
          alt="Fawry Logo"
    
          src={fawryLogo}
          className="h-10 w-40 md:h-12 md:w-56"
        />
      </div>

      <div className="px-4">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search movies..."
            className="w-full px-4 py-2 pl-10 pr-4 text-gray-100 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><button>Profile</button></li>
        <li><button onClick={() => {navigate("/")}}>Logout</button></li>
      </ul>
    </div>

    </div>
  );
};

export default NavBarLogin;

import React from "react";
import fawryLogo from "../../assets/logo1.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ showSignIn }) => {
  const [isVisible, setIsVisible] = useState(showSignIn);
  const navigate = useNavigate();

  const handleSignIn = () => {
    setIsVisible(false);
    navigate("/login"); 
  };
  return (
    <div className="navbar  justify-around  bg-gradient-to-t from-transparent to-black/90">

      <div >
        <img
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          alt="Fawry Logo"
    
          src={fawryLogo}
          className="h-10 w-40 md:h-12 md:w-56"
        />
      </div>
      {!isVisible && (<div></div>)}
      {isVisible && (
        <div>
        <button
          className="btn btn-ghost bg-yellow-400 min-h-[2.1rem] rounded-[.35rem] h-1 text-black hover:bg-black hover:text-yellow-300"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
      )}


    </div>
  );
};

export default NavBar;

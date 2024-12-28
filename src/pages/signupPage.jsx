import React from "react";
import Signup from "../components/Registration/signup";
import NavBar from "../components/NavBar/navBar";
import backgroundImage from "../assets/hero.jpg";
import Footer from "../components/Footer/footer";

const SignupPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: `url(${backgroundImage})`, filter: "brightness(40%)"}}></div>
        <NavBar showSignIn={false} />
        <Signup />
        <Footer/>
      </div>
  );
};

export default SignupPage;
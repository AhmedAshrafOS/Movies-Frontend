import React from "react";
import NavBar from "../components/NavBar/navBar";
import backgroundImage from "../assets/hero.jpg";
import HeroSection from "../components/HeroSection/heroSection";
import Footer from "../components/Footer/footer";

const MainPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: `url(${backgroundImage})`, filter: "brightness(40%)"}}></div>
      <NavBar  showSignIn={true}/>
      <HeroSection/>
      <Footer/>
    </div>
  );
};

export default MainPage;

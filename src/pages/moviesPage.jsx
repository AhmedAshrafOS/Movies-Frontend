import React, { useState } from "react";
import backgroundImage from "../assets/hero.jpg";
import Footer from "../components/Footer/footer";
import NavBarLogin from "../components/NavBar/navBarLogin";
import Movies from "../components/Movies/movies";

const MoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: `url(${backgroundImage})`, filter: "brightness(30%)"}}></div>
      <NavBarLogin onSearch={handleSearch} />
      <Movies searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
};

export default MoviesPage;

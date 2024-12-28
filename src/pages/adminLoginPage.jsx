import React from "react";
import AdminLogin from "../components/Admin/adminLogin";
import NavBar from "../components/NavBar/navBar";
import backgroundImage from "../assets/hero.jpg";
import Footer from "../components/Footer/footer";

const AdminLoginPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: `url(${backgroundImage})`, filter: "brightness(30%)"}}></div>
      <NavBar showSignIn={false} />
      <AdminLogin />
      <Footer/>
    </div>
  );
};

export default AdminLoginPage;

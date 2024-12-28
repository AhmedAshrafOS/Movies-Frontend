import React from "react";
import AdminDashboard from "../components/Admin/adminDashboard";
import NavBar from "../components/NavBar/navBar";
import backgroundImage from "../assets/hero.jpg";
import Footer from "../components/Footer/footer";

const AdminDashboardPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 w-full h-full bg-cover bg-center -z-10" style={{backgroundImage: `url(${backgroundImage})`, filter: "brightness(30%)"}}></div>
      <NavBar showSignIn={false} />
      <AdminDashboard />
      <Footer/>
    </div>
  );
};

export default AdminDashboardPage;

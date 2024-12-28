import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage"; 
import SignupPage from "./pages/signupPage"; 
import MoviesPage from "./pages/moviesPage";
import AdminLogin from "./pages/adminLoginPage";
import AdminDashboard from "./pages/adminDashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import "./Navbar.css";
import { assets } from "../../assets/asset.js";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <img src={assets.logo} alt="logo" />
          Educity
        </Link>
      </div>

      <div className="navbar-links">
        {/* If user is admin */}
        {user?.role === "admin" ? (
          <>
            <Link to="/admin/home" className="navbar-link">
              Admin Home
            </Link>
            <Link to="/admin/courses" className="navbar-link">
              Course
            </Link>
            <Link to="/admin/ticket" className="navbar-link">
              Tickets
            </Link>
          </>
        ) : (
          // If user is normal user
          <>
            <Link to="/" className="navbar-link">
              Home
            </Link>
            <Link to="/courses" className="navbar-link">
              Courses
            </Link>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>
            <Link to="/skills" className="navbar-link">
              Skill Courses
            </Link>
            <Link to="/submit-ticket" className="navbar-link">
              Support
            </Link>
          </>
        )}
      </div>

      <div className="navbar-auth">
        {user ? (
          <>
            <span className="navbar-user">Hi, {user.name}</span>
            <button onClick={handleLogout} className="navbar-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-button">
              Login
            </Link>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

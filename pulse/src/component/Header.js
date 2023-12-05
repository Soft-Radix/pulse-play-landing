import React from "react";
import "../style/HeaderStyle.css";
import logoImg from "../assets/logo.png";
import logoName from "../assets/logoName.png";

function Header() {
  return (
    <div className="main-header">
      {/* Navigation Container */}
      <div className="nav-container">
        {/* Logo Section */}
        <div className="logo-wrapper">
          <img src={logoImg} alt="" className="logoImg"></img>
          <img src={logoName} alt="" className="logoName"></img>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          <a href=" ">Home</a>
          <a href=" ">About Us</a>
          <a href=" ">Contact us</a>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-button">
          <button className="btn-logIn">Log In</button>
          <button className="btn-signUp">Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default Header;

import React from "react";
import "../style/HeaderStyle.css";
import logoImg from "../assets/logo.png";
import logoName from "../assets/logoName.png";
import { Navbar, Nav, Container } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <Navbar className="main-header d-flex" expand="lg">
      <Container className="nav-container">
        {/* Logo Section */}
        <div className="logo-wrapper">
          <img src={logoImg} alt="" className="logoImg" />
          <img src={logoName} alt="" className="logoName" />
        </div>

        {/* Navigation Toggle Button */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle"
        />

        {/* Navigation Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-items">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>

          {/* Navigation Buttons */}
          <div className="nav-button">
            <button className="btn-logIn">Log In</button>
            <button className="btn-signUp">Sign up</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

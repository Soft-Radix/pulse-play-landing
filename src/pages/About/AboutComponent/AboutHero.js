import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Importing Container, Row, and Col components from react-bootstrap
import { LazyLoadImage } from "react-lazy-load-image-component"; // Importing LazyLoadImage component from react-lazy-load-image-component
import mainImg from "../../../assets/aboutBg.png"; // Importing the main image for the About page
import "../../../style/componentStyle/aboutPage/AboutPageStyle.css"; // Importing the CSS styles for the About page
import circleImg from "../../../assets/circle.svg";
import crossImg from "../../../assets/x.svg";
// Functional component for the About page

function AboutHero() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#0E1015", position: "relative" }}
      className="pb-3"
    >
      {/* Container for the main content with a black background */}
      <Row className="pt-1">
        {/* Row for arranging content */}
        <Col md={7} className="about-mainText pl-3">
          <img src={circleImg} alt="" className="circle"></img>
          <img src={crossImg} alt="" className="cross"></img>
          {/* Column for the main text content */}
          <h1 className="about-main-heading">
            About <span>Us</span>
          </h1>
          <p className="about-main-para">
            {/* Main paragraph describing the purpose */}
            Lorem ipsum dolor sit amet consectetur. Magna velit at tincidunt
            ipsum montes praesent sagittis. Eget proin sapien volutpat a hac
            vulputate. Eleifend nec
          </p>
        </Col>
        <Col md={5}>
          {/* Column for displaying the main image */}
          <LazyLoadImage
            src={mainImg}
            effect="blur"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutHero;

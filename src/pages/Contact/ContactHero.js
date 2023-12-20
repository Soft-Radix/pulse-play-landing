import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactbg from "../../assets/contactBG.png";
import "../../style/componentStyle/contactPage/ContactHeroPageStyle.css";
import starImg from "../../assets/Soft Star.svg";
import pinkImg from "../../assets/circlePink.svg";
import pink1Img from "../../assets/circlePink1.svg";
import purpleImg from "../../assets/circle.svg";

import xImg from "../../assets/x.svg";
function ContactHero() {
  const contactBg = {
    backgroundImage: `url(${contactbg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "relative",
    bottom: "100px",
    zIndex: "-1",
  };
  return (
    <Container
      fluid
      style={contactBg}
      className="pt-3 pb-3 contactPage-container"
    >
      <img src={xImg} alt="" className="crossImg"></img>
      <img src={purpleImg} alt="" className="purpleImg"></img>
      <img src={pinkImg} alt="" className="pinkIMG"></img>
      <img src={pink1Img} alt="" className="pinkimg1"></img>
      <img src={starImg} alt="" className="starImg"></img>
      <Row>
        <Col className="contactPage-text">
          <h1 className="contactHero-heading">
            Contact <span>Us</span>
          </h1>
          <p className="contactHero-para">
            Lorem ipsum dolor sit amet consectetur. Magna velit at tincidunt
            ipsum montes praesent sagittis. Eget proin sapien volutpat a hac
            vulputate. Eleifend nec{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactHero;

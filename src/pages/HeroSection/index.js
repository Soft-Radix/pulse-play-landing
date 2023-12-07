import React from "react";
import "../../style/HeaderStyle.css";
import googleImg from "../../assets/google.svg";
import appImg from "../../assets/apple.svg";
import textImg from "../../assets/mainHeader.png";
import { Container, Row, Col } from "react-bootstrap";
export default function HeroSection() {
  return (
    <Container fluid className="main-wrapper">
      <Row>
        <Col md={7}>
          <div className="main-text">
            <h1 className="main-heading">
              Here’s to
              <span>Video Dating </span>
              <br></br>with Confidence.
            </h1>
            <p className="main-para">
              Lorem ipsum dolor sit amet consectetur. Magna velit at tincidunt
              <br></br>
              ipsum montes praesent sagittis. Eget proin sapien volutpat a hac
              <br></br>
              vulputate. Eleifend nec{" "}
            </p>

            {/* Text Button Section */}
            <div className="text-btn">
              <object
                type="image/svg+xml"
                data={googleImg}
                className="googleImg img-fluid"
              >
                svg-image
              </object>
              <object type="image/svg+xml" data={appImg} className="appImg">
                svg-image
              </object>
            </div>
          </div>
        </Col>
        <Col md={5}>
          <div className="text-image img-fluid">
            <img src={textImg} alt="" className="img-fluid textImg"></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

import React from "react";
import "../../../style/HeaderStyle.css";
import googleImg from "../../../assets/google.svg";
import appImg from "../../../assets/apple.svg";
import textImg from "../../../assets/mainHeader.png";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import xImg from "../../../assets/x.svg";
import circleImg from "../../../assets/circle.svg";
import pinkImg from "../../../assets/circlePink.svg";

function Dating() {
  return (
    <Container fluid className="main-wrapper">
      <Row>
        <Col md={7}>
          <img
            src={xImg}
            alt=""
            className="img-fluid"
            style={{ position: "absolute", top: "38em" }}
          ></img>
          <img
            src={circleImg}
            alt=""
            style={{ position: "absolute", top: "40%", left: "16%" }}
          ></img>

          <div className="main-text">
            <h1 className="main-heading">
              Here’s to
              <span> Video Dating </span>
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
              <LazyLoadImage
                src={googleImg}
                alt=""
                className="img-fluid textImg"
                effect="blur"
              />

              <LazyLoadImage
                src={appImg}
                alt=""
                className="img-fluid textImg"
                effect="blur"
              />
            </div>
          </div>
        </Col>
        <Col md={5}>
          <img
            src={pinkImg}
            alt=""
            style={{ position: "absolute", right: "44%", top: "36em" }}
          ></img>
          <div className="text-image img-fluid">
            <LazyLoadImage
              src={textImg}
              alt=""
              className="img-fluid textImg"
              effect="blur"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dating;

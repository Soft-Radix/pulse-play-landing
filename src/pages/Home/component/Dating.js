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
    <div className="main-wrapper">
      <img src={xImg} alt="" className="img-fluid xImg"></img>
      <img src={circleImg} alt="" className="circlePurpleImg"></img>
      <img src={pinkImg} alt="" className="pinkImg"></img>
      <Container>
        <Row>
          <Col md={7}>
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
    </div>
  );
}

export default Dating;

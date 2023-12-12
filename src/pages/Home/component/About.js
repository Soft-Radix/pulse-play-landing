import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImg from "../../../assets/aboutImg.svg";

import "../../../style/componentStyle/home/aboutStyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
  return (
    <>
      <Container className="mt-5 pb-4 about-wrapper">
        <Row className="d-flex flex-row-reverse">
          <Col md={6} className="pt-4 order-md-1">
            <LazyLoadImage
              src={aboutImg}
              alt=""
              className="img-fluid about-img"
              effect="blur"
            />
          </Col>
          <Col
            className="d-flex align-items-start justify-content-center flex-column mb-4 about-text"
            md={6}
          >
            <h2 className="about-heading">
              About <span>Pulse Play</span>
            </h2>
            <p className="about-para">
              Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
              vel<br></br> quam sit. Urna aliquet id convallis in semper egestas
              leo. Amet ultrices ut hendrerit consequat est tincidunt pharetra
              egestas porttitor. Ut amet non nunc non vitae orci nunc.
            </p>
            <div className="about-list">
              <div className="list-data">
                <div className="circleImg"></div>
                <p className="data-para">You can create video profile</p>
              </div>
              <div className="list-data">
                <div className="circleImg"></div>
                <p className="data-para">You can chat with your matches</p>
              </div>
              <div className="list-data">
                <div className="circleImg"></div>
                <p className="data-para">
                  You can chat with multiple languages
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../style/componentStyle/aboutPage/EmpowerStyle.css";

import empowerImg from "../../../assets/empowerImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Empower() {
  return (
    <div className="empower-container">
      <Container className="pt-3">
        {/* First Row */}
        <Row className="pt-3 ">
          <Col>
            <h2 className="empower-heading">
              We <span>Empower</span>
            </h2>
            <p className="empower-para">
              Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
              vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex">
            <div class="step-container">
              <div className="steps">
                <span className="circles">01</span>
                <span className="circles">02</span>
                <span className="circles">03</span>

                <div className="progress-bar">
                  <span className="indicator"></span>
                </div>
              </div>
              <div className="progress-wrapper">
                <div className="description-container">
                  <h5 className="description-heading">
                    Safe, open and empowering
                  </h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </div>

                <div className="description-container">
                  <h5 className="description-heading">It's about freedom</h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </div>

                <div className="description-container">
                  <h5 className="description-heading">It’s about you</h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col>
            <LazyLoadImage
              src={empowerImg}
              effect="blur "
              alt=""
              className="img-fluid empower-img"
            ></LazyLoadImage>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Empower;

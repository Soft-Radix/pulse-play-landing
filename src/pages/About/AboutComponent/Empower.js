import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../style/componentStyle/aboutPage/EmpowerStyle.css";

import empowerImg from "../../../assets/empowerImg.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Empower() {
  return (
    <Container fluid style={{ backgroundColor: " #ffe6ef" }} className="pt-3">
      {/* First Row */}
      <Row className="pt-3">
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

      {/* Second Row */}
      <Row className="align-items-center progress-row ">
        {/* Left Column */}
        <Col className="d-flex justify-content-end">
          <Col className="progress-wrapper">
            {/* Vertical Progress Bar */}
            <ul className="progressbar vertical">
              {/* First Step */}
              <div className="custom">
                <li className="active">
                  <div className="vertical-line"></div>
                </li>
                <Col className="description-container">
                  <h5 className="description-heading">
                    Safe, open and empowering
                  </h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </Col>
              </div>

              {/* Second Step */}
              <div className="custom">
                <li>
                  <div className="vertical-line"></div>
                </li>
                <Col className="description-container">
                  <h5 className="description-heading">It's about freedom</h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </Col>
              </div>

              {/* Third Step */}
              <div className="custom">
                <li></li>
                <Col className="description-container">
                  <h5 className="description-heading">It’s about you</h5>
                  <p className="description-para">
                    Lorem ipsum dolor sit amet consectetur. Elit egestas dui
                    arcu
                  </p>
                </Col>
              </div>
            </ul>
          </Col>
        </Col>

        {/* Right Column */}
        <Col className="d-flex justify-content-center">
          <LazyLoadImage
            src={empowerImg}
            effect="blur "
            alt=""
            className="img-fluid empower-img"
          ></LazyLoadImage>
        </Col>
      </Row>
    </Container>
  );
}

export default Empower;

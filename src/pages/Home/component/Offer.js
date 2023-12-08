import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import offerImg from "../../../assets/offerImg.svg";
import VectorImg from "../../../assets/Vector.svg";
import "../../../style/offerStyle.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Offer() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#FFE8EE" }}
      className="pt-3 pb-3"
    >
      <Row className="justify-content-center align-items-center offer-wrapper">
        <Col md={6}>
          <h1 className="offer-heading">
            What You Discover With Our <span>Premium</span> Package
          </h1>
          <p className="offer-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
          </p>
          <div className="list-container">
            <div className="offer-list">
              <LazyLoadImage
                src={VectorImg}
                alt=""
                className="img-fluid"
                effect="blur"
              />
              <p className="list-para">Video & voice call features</p>
            </div>
            <div className="offer-list">
              <img src={VectorImg} alt="" className="img-fluid"></img>
              <p className="list-para">Discover people from another location</p>
            </div>
            <div className="offer-list">
              <img src={VectorImg} alt="" className="img-fluid"></img>
              <p className="list-para">
                Phone number, Apple & Google authentications.
              </p>
            </div>
            <div className="offer-list">
              <img src={VectorImg} alt="" className="img-fluid"></img>
              <p className="list-para">Hide your distance features</p>
            </div>
            <div className="offer-list">
              <img src={VectorImg} alt="" className="img-fluid"></img>
              <p className="list-para">
                Reach a global audience by adding any language
              </p>
            </div>
            <div className="offer-list">
              <img src={VectorImg} alt="" className="img-fluid"></img>
              <p className="list-para">
                Track your business growth in real time
              </p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <LazyLoadImage src={offerImg} alt="" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}

export default Offer;

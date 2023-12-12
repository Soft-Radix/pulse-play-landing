import React from "react";
import { Col, Container, Carousel, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import successImg from "../../../assets/successimg.svg";
import "../../../style/componentStyle/successStyle.css";
// import prevImg from "../../../assets/prev.svg";
// import nextImg from "../../../assets/next.svg";

function Success() {
  return (
    <Container className="pb-3 pt-3">
      <Row className="pt-3 pb-3 ">
        <Col className=" success-container">
          <h2 className="success-heading">
            Success <span>Stories</span>
          </h2>
          <p className="success-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
          </p>
        </Col>
      </Row>
      <Row className="pb-3 pt-3">
        <Col className="slider">
          <Carousel>
            <Carousel.Item className="slider-carosel">
              <LazyLoadImage
                className="img-fluid slider-img"
                src={successImg}
                alt="First slide"
                effect="blur"
              />
              <Carousel.Caption className="slider-caption">
                <h3 className="slider-heading">Alexandra</h3>
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu
                  nisi vel quam sit. Urna aliquet id convallis in semper egestas
                  leo. Amet ultrices ut hendrerit consequat est tincidunt
                  pharetra egestas porttitor. Ut amet non nunc non vitae orci
                  nunc.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-carosel">
              <LazyLoadImage
                className="img-fluid slider-img"
                src={successImg}
                alt="First slide"
              />
              <Carousel.Caption className="slider-caption">
                <h3 className="slider-heading">Alexandra</h3>
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu
                  nisi vel quam sit. Urna aliquet id convallis in semper egestas
                  leo. Amet ultrices ut hendrerit consequat est tincidunt
                  pharetra egestas porttitor. Ut amet non nunc non vitae orci
                  nunc.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-carosel">
              <LazyLoadImage
                className="img-fluid slider-img"
                src={successImg}
                alt="First slide"
              />
              <Carousel.Caption className="slider-caption">
                <h3 className="slider-heading">Alexandra</h3>
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu
                  nisi vel quam sit. Urna aliquet id convallis in semper egestas
                  leo. Amet ultrices ut hendrerit consequat est tincidunt
                  pharetra egestas porttitor. Ut amet non nunc non vitae orci
                  nunc.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slider-carosel">
              <LazyLoadImage
                className="img-fluid slider-img"
                src={successImg}
                alt="First slide"
              />
              <Carousel.Caption className="slider-caption">
                <h3 className="slider-heading">Alexandra</h3>
                <p className="slider-para">
                  Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu
                  nisi vel quam sit. Urna aliquet id convallis in semper egestas
                  leo. Amet ultrices ut hendrerit consequat est tincidunt
                  pharetra egestas porttitor. Ut amet non nunc non vitae orci
                  nunc.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Success;

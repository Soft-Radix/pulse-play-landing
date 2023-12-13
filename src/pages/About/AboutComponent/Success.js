import React from "react";
import { Col, Container, Carousel, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import successImg from "../../../assets/successimg.svg";
import "../../../style/componentStyle/aboutPage/successStyle.css";
// import prevImg from "../../../assets/prev.svg";
// import nextImg from "../../../assets/next.svg";

function Success() {
  return (
    // Container for the Success section
    <Container className="pb-3 pt-3">
      {/* Row for the heading and description of the Success section */}
      <Row className="pt-3 pb-3 ">
        <Col className="success-container">
          {/* Heading for the Success section */}
          <h2 className="success-heading">
            Success <span>Stories</span>
          </h2>
          {/* Paragraph for the description of the Success section */}
          <p className="success-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
          </p>
        </Col>
      </Row>

      {/* Row for the Carousel component */}
      <Row className="pb-3 pt-3">
        {/* Column containing the Slider (Carousel) */}
        <Col className="slider">
          {/* Bootstrap Carousel component */}
          <Carousel>
            {/* Individual Carousel items */}
            <Carousel.Item className="slider-carosel">
              {/* Lazy-loaded image for the Carousel item */}
              <LazyLoadImage
                className="img-fluid slider-img"
                src={successImg}
                alt="First slide"
                effect="blur"
              />
              {/* Caption for the Carousel item */}
              <Carousel.Caption className="slider-caption">
                {/* Heading for the Carousel item */}
                <h3 className="slider-heading">Alexandra</h3>
                {/* Paragraph for the Carousel item */}
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

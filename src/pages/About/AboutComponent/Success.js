import React from "react";
import { Col, Container, Carousel, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import successImg from "../../../assets/successimg.svg";
function Success() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Success <span>Stories</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <LazyLoadImage
                className="d-block img-fluid"
                src={successImg}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Alexandra</h3>
                <p>
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

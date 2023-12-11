import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import featuresImg from "../../../assets/featureImg.svg";
import redVector from "../../../assets/VectorRed.svg";
import vectorImg from "../../../assets/Vector.svg";
import "../../../style/componentStyle/FeaturesStyle.css";
import { Container, Row, Col } from "react-bootstrap";

function Features() {
  return (
    <Container>
      <Row>
        <Col>
          <LazyLoadImage src={featuresImg} />
        </Col>
        <Col>
          <h1>
            We Keep It <span>Real</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet
            ultrices ut hendrerit consequat est tincidunt pharetra egestas
            porttitor. Ut amet non nunc non vitae orci nunc.
          </p>
          <div>
            <span>
              <img src={vectorImg} alt="" className="img-fluid"></img>
            </span>
            <h3>Video & voice call</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae
              velit proin justo, elementum siIn morbi{" "}
            </p>
            <span>
              <img src={redVector} alt="" className="img-fluid"></img>
            </span>
            <h3>Travel feature</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae
              velit proin justo, elementum siIn morbi{" "}
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Features;

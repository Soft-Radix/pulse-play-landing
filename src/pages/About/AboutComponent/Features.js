// Importing React and necessary components/libraries
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import featuresImg from "../../../assets/featur.png";
import redVector from "../../../assets/VectorRed.svg";
import vectorImg from "../../../assets/Vector.svg";
import "../../../style/componentStyle/aboutPage/FeaturesStyle.css";
import { Container, Row, Col } from "react-bootstrap";

// Functional component for the Features section
function Features() {
  return (
    // Container for the Features section with top and bottom padding
    <Container fluid className="pt-3 pb-3">
      {/* Row for arranging content in the Features section */}
      <Row className="features-container">
        {/* Column for the Features image */}
        <Col md={6}>
          <LazyLoadImage
            src={featuresImg}
            alt=""
            effect="blur"
            className="img-fluid"
          />
        </Col>
        {/* Column for the Features text and list */}
        <Col>
          {/* Heading for the Features section */}
          <h1 className="feature-heading">
            We Keep It <span>Real</span>
          </h1>
          {/* Paragraph describing the Features section */}
          <p className="feature-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet
            ultrices ut hendrerit consequat est tincidunt pharetra egestas
            porttitor. Ut amet non nunc non vitae orci nunc.
          </p>
          {/* Container for the Features list */}
          <Col className="d-flex flex-column features-list">
            {/* Individual feature item */}
            <Col>
              {/* Feature item content with icon and heading */}
              <Col className="d-flex features-list">
                <img src={vectorImg} alt="" className="img-fluid"></img>
                <h3 className="features-list-heading">Video & voice call</h3>
              </Col>
              {/* Feature item description */}
              <p className="features-list-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae
                velit proin justo, elementum siIn morbi{" "}
              </p>
            </Col>
            {/* Another individual feature item */}
            <Col>
              {/* Feature item content with icon and heading */}
              <Col className="d-flex features-list">
                <img src={redVector} alt="" className="img-fluid"></img>
                <h3 className="features-list-heading">Travel feature</h3>
              </Col>
              {/* Feature item description */}
              <p className="features-list-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae
                velit proin justo, elementum siIn morbi{" "}
              </p>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

// Exporting the Features component as the default export
export default Features;

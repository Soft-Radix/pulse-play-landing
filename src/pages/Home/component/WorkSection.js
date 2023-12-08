import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../../style/workStyle.css";
import img1 from "../../../assets/1.svg";
import img2 from "../../../assets/2.svg";
import img3 from "../../../assets/3.svg";
import circle from "../../../assets/cardCircle.svg";
import bgImg from "../../../assets/workBackground.png";
import Card from "../../../component/Card";

function WorkSection() {
  const styles = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover", // Adjust as needed
    backgroundPosition: "center", // Adjust as needed
    /* Other background properties if needed */
  };

  return (
    <Container
      fluid
      className="work-container mt-3 mb-3 pt-4 pb-5"
      style={styles}
    >
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="work-heading">How It Works</h1>
          <p className="work-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet
            ultrices ut hendrerit consequat est tincidunt pharetra egestas
            porttitor. Ut amet non nunc non vitae orci nunc.
          </p>
        </Col>
      </Row>

      <Row className="custom-card mt-3">
        <Card
          imgSrc={img1}
          title={"Sign up now"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut he"
          }
          circle={circle}
          left="-75px"
        />
        <Card
          imgSrc={img2}
          title={"Add Information"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut he"
          }
          circle={circle}
          left="-100px"
        />
        <Card
          imgSrc={img3}
          title={"Find your match"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut he"
          }
          circle={circle}
          left="-100px"
        />
      </Row>
    </Container>
  );
}

export default WorkSection;

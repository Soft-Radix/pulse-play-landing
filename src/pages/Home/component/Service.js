import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../../style/serviceStyle.css";
import img1 from "../../../assets/service1.svg";
import img2 from "../../../assets/service2.svg";
import img3 from "../../../assets/service3.svg";
import img4 from "../../../assets/service4.svg";
import ServiceCard from "../../../component/ServiceCard";

function Service() {
  return (
    <Container fluid className="pt-5 pb-4">
      <Row>
        <Col className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="service-heading">
            <span>Services</span> We Offer
          </h1>
          <p className="service-para">
            Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi
            vel quam sit. Urna aliquet id convallis in semper egestas leo.
            <br></br> Amet ultrices ut hendrerit consequat est tincidunt
            pharetra egestas porttitor. Ut amet non nunc non vitae orci nunc
          </p>
        </Col>
      </Row>
      <Row className="service-row">
        <ServiceCard
          title={"Video call"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut hendrerit consequat est tincidunt"
          }
          imgSrc={img1}
        />
        <ServiceCard
          title={"Chats & Matches"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut hendrerit consequat est tincidunt"
          }
          imgSrc={img2}
        />
        <ServiceCard
          title={"Monetization"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut hendrerit consequat est tincidunt"
          }
          imgSrc={img3}
        />
        <ServiceCard
          title={"Multi Language"}
          description={
            "Lorem ipsum dolor sit amet consectetur. Elit egestas dui arcu nisi vel quam sit. Urna aliquet id convallis in semper egestas leo. Amet ultrices ut hendrerit consequat est tincidunt"
          }
          imgSrc={img4}
        />
      </Row>
    </Container>
  );
}

export default Service;

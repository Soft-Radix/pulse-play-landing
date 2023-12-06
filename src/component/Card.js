import React from "react";
import "../style/workStyle.css";
import { Col } from "react-bootstrap";

function Card(props) {
  const { imgSrc, title, description, circle, heart } = props;
  return (
    <Col md={4}>
      <div className="work-card">
        <img src={imgSrc} alt=""></img>
        <div className="card-text">
          <div className="text-wrapper">
            <img src={circle} alt="" className="circle"></img>
            <h2 className="text-sign">{title}</h2>
            <img src={heart} alt="" className="heart"></img>
          </div>
          <div>
            <p className="text-para">{description}</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Card;

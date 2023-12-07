import React from "react";
import "../style/workStyle.css";
import { Col } from "react-bootstrap";
import hearts from "../assets/cardHeart.svg";

function Card(props) {
  const { imgSrc, title, description, circle, left } = props;
  const Heart = {
    backgroundImage: `url(${hearts})`,
    backgroundSize: "inherit", // Adjust as needed
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat", // Adjust as needed
    /* Other background properties if needed */
  };
  const Position = {
    position: "relative",
  };

  return (
    <Col md={3} style={Position}>
      <div className="work-card" style={{ position: "relative" }}>
        <img
          src={imgSrc}
          alt=""
          style={{ position: "absolute", left }}
          className="imgSrc img-fluid"
        ></img>
        <div className="card-text" style={Heart}>
          <div className="text-wrapper">
            <img src={circle} alt="" className="circle img-fluid"></img>
            <h2 className="text-sign">{title}</h2>
            {/* <img src={heart} alt="" className="heart"></img> */}
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

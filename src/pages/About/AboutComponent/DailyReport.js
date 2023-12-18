import React from "react";
import "../../../style/componentStyle/aboutPage/dailyReportStyle.css";

import headImg from "../../../assets/head.svg";
import userImg from "../../../assets/user.svg";
import chatImg from "../../../assets/fluent_chat-12-filled.svg";
import locationImg from "../../../assets/location.svg";
import { Container, Col, Row } from "react-bootstrap";
import DailyReportCard from "../../../component/DailyReportCard";

function DailyReport() {
  return (
    // Container for the daily report section
    <div
      style={{
        background:
          "linear-gradient(272deg,rgba(253, 41, 123, 0.12) -5.84%,rgba(255, 88, 100, 0.12) 98.18%)",
      }}
    >
      <Container className="report-container ">
        {/* Row to contain the DailyReportCard components */}
        <Row>
          {/* Column with flex-wrap to allow responsive layout */}
          <Col className="d-flex flex-wrap  report-icon-container">
            {/* Each DailyReportCard represents a statistic */}
            {/* Import DailyReportCard  */}
            <DailyReportCard
              reportImg={headImg}
              reportHeading={"1830+"}
              reporttext={"love stories"}
            />
            <DailyReportCard
              reportImg={locationImg}
              reportHeading={"2200+"}
              reporttext={"daters worldwide"}
            />
            <DailyReportCard
              reportImg={chatImg}
              reportHeading={"390+"}
              reporttext={"exciting chats"}
            />
            <DailyReportCard
              reportImg={userImg}
              reportHeading={"834+"}
              reporttext={"daily active daters"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DailyReport;

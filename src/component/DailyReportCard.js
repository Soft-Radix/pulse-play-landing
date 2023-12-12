import React from "react";
import { Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DailyReportCard(props) {
  // Destructuring props to extract data
  const { reportImg, reportHeading, reporttext } = props;

  return (
    // Column for the DailyReportCard
    <Col className="check ">
      {/* Circular wrapper for the report icon */}
      <div className="report-wrapper">
        {/* Lazy-loaded image for the report icon */}
        <LazyLoadImage src={reportImg} alt="" className="report-icon" />
      </div>

      {/* Text content for the report */}
      <div className="report-text">
        {/* Heading for the report */}
        <h1 className="report-text-heading">{reportHeading}</h1>

        {/* Paragraph for additional report text */}
        <p className="report-text-para">{reporttext}</p>
      </div>
    </Col>
  );
}

export default DailyReportCard;

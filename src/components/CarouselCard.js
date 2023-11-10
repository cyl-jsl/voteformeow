import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CarouselCard = (props) => {
  const { cardImg, cardTitle, cardDescription, tagBg, className } = props;
  return (
    <div className={`carousel-card bg-white d-flex flex-column flex-sm-row justify-content-evenly align-items-sm-center ${className}`}>
      <div className="cc-left">
        <img src={cardImg} alt="" />
      </div>

      <div className="cc-right d-flex flex-column align-items-start">
        <div
          className="cc-tag vfm-small vfm-secPri opacity-75"
          style={{ backgroundColor: tagBg }}
        >
          {cardTitle}
        </div>
        <div
          className="cc-des vfm-fs4 vfm-priText"
          dangerouslySetInnerHTML={{ __html: cardDescription }}
        ></div>
        <div className="morePill d-flex justify-content-center align-items-center mb-3 mb-sm-0">
          <div className="me-2">查看</div>
          <ArrowForwardIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;

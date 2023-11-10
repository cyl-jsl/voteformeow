import React from "react";
import CarouselCard from "./CarouselCard";
import policy1 from "../images/policy1.png";
import policy2 from "../images/policy2.png";
import policy3 from "../images/policy3.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

const Policy = () => {

  
  const handleLeft = () => {
    console.log("left");
  };
  const handleRight = () => {
    console.log("right");
  };
  return (
    <div className="section-policy vfm-bg2">
      <div className="d-flex flex-column align-items-center">
        <div className="vfm-tag vfm-fs6 mb-sm-3">POLICY ISSUES</div>
        <h3 className="vfm-titleFont vfm-titleColor my-sm-3">政策議題</h3>
      </div>
      <div className="carousel container-fluid d-flex justify-content-center">
        <CarouselCard
          className="active"
          tagBg="#F7ECE1"
          cardImg={policy1}
          cardTitle="喵的保障"
          cardDescription="為毛孩子謀福利！<br/>推動寵物醫療保障方案"
        />
        <CarouselCard
          className="right"
          tagBg="#BEEADB"
          cardImg={policy2}
          cardTitle="喵的福利"
          cardDescription="打造休閒天堂！<br/>推廣寵物休閒與娛樂場所"
        />
        <CarouselCard
          className="left"
          tagBg="#FFDDDD"
          cardImg={policy3}
          cardTitle="喵的教育"
          cardDescription="推廣寵物飼養教育，<br/>讓愛更加專業"
        />
      </div>
      <div className="controlBtns d-flex justify-content-center mt-5">
        <div className="controlBtn" onClick={handleLeft}>
          <ArrowBack fontSize="medium" />
        </div>
        <div className="pagination d-flex align-items-center">
          <div className="dot active"></div>
          <div className="dot right"></div>
          <div className="dot left"></div>
        </div>
        <div className="controlBtn" onClick={handleRight}>
          <ArrowForwardIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};

export default Policy;

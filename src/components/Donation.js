import React from "react";
import donate from "../images/donate.png";
import mail1 from "../images/mail1.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Donation = () => {
  return (
    <div className="section-donation container d-md-flex justify-content-center p-md-0">
      <div className="left vfm-bgTheme mb-2 mb-md-0 me-md-2 d-flex flex-column justify-content-center justify-content-lg-between">
        <div className="up text-center text-md-start">
          <div className="vfm-titleFont">小額支持喵喵</div>
          <div className="vfm-body">
            您的小筆捐款，是每隻毛孩未來的大大動力！
          </div>
        </div>
        <div className="down d-flex align-items-center justify-content-center   justify-content-md-start mt-3">
          <div>
            <div className="morePill bg-white d-flex justify-content-center align-items-center">
              <div className="me-2">小額捐款</div>
              <ArrowForwardIcon fontSize="large" />
            </div>
          </div>
          <div className="imgWrapper">
            <img src={donate} alt="" />
          </div>
        </div>
      </div>
      <div className="right vfm-bgPriText mt-2 mt-md-0 ms-md-2 d-flex flex-column">
        <div className="up text-center text-md-start">
          <div className="vfm-titleFont">民眾服務信箱</div>
          <div className="vfm-body">
            親愛的鄉親，每一位市民的意見都是我們社區前進的原動力
          </div>
        </div>
        <div className="down d-flex align-items-center justify-content-center justify-content-md-start mt-5">
          <div>
            <div className="morePill bg-white d-flex justify-content-center align-items-center">
              <div className="me-2">填寫表單</div>
              <ArrowForwardIcon fontSize="large" />
            </div>
          </div>
          <div className="imgWrapper">
            <img src={mail1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;

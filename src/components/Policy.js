import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselCard from "./CarouselCard";
import policy1 from "../images/policy1.png";
import policy2 from "../images/policy2.png";
import policy3 from "../images/policy3.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBack from "@mui/icons-material/ArrowBack";

const Policy = () => {
  const options = {
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 8500,
    center: true,
    items: 3,
    nav: true,
    dots: true,
    smartSpeed: 450,
    autoWidth: true,
    navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],
    // margin: 12,
    // responsive: {
    //   0: {
    //     items: 3,
    //   },
    //   600: {
    //     items: 3,
    //   },
    //   1000: {
    //     items: 3,
    //   },
    // },
  };
  return (
    <div className="section-policy vfm-bg2">
      <div className="d-flex flex-column align-items-center">
        <div className="vfm-tag vfm-fs6 mb-sm-3">POLICY ISSUES</div>
        <h3 className="vfm-titleFont vfm-titleColor mb-sm-5 pb-sm-5">政策議題</h3>
      </div>
      <OwlCarousel
        id="customer-testimonoals "
        className="carousel owl-carousel owl-theme d-flex flex-column justify-content-center"
        {...options}
      >
        <CarouselCard
          className="item"
          tagBg="#F7ECE1"
          cardImg={policy1}
          cardTitle="喵的保障"
          cardDescription="為毛孩子謀福利！<br/>推動寵物醫療保障方案"
        />
        <CarouselCard
          className="item"
          tagBg="#BEEADB"
          cardImg={policy2}
          cardTitle="喵的福利"
          cardDescription="打造休閒天堂！<br/>推廣寵物休閒與娛樂場所"
        />
        <CarouselCard
          className="item"
          tagBg="#FFDDDD"
          cardImg={policy3}
          cardTitle="喵的教育"
          cardDescription="推廣寵物飼養教育，<br/>讓愛更加專業"
        />
        
      </OwlCarousel>
      {/* <div className="controlBtns d-flex justify-content-center mt-5">
        <div className="controlBtn owl-prev" >
          <ArrowBack fontSize="medium" />
        </div>
        <div className="pagination d-flex align-items-center owl-dots">
          <div className="dot active owl-dot"></div>
          <div className="dot right owl-dot"></div>
          <div className="dot left owl-dot"></div>
        </div>
        <div className="controlBtn owl-next" >
          <ArrowForwardIcon fontSize="medium" />
        </div>
      </div> */}
    </div>
  );
};

export default Policy;

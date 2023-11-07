import React from "react";
import hero from "../images/header.png";
import btnFb from "../icons/btnFb.png";
import btnIg from "../icons/btnIg.png";
import btnYt from "../icons/btnYt.png";

const Banner = () => {
  return (
    <div className="section-banner bg-white">
      <div className="title text-center">
        <h1 className="vfm-titleColor vfm-titleFont my-2">
          台灣的明天 <br className="d-md-none" />
          喵先鋪路
        </h1>
        <div className="d-flex flex-wrap justify-content-center align-items-center my-2">
          <div className="vfm-bgPriText mx-2">
            <h2 className="text-white vfm-fs3">2024 立委參選人</h2>
          </div>
          <div className="title-wrapper d-flex align-items-center mx-2">
            <div className="vfm-gradient vfm-number rounded-circle text-center">
              3
            </div>
            <div className="vfm-theme vfm-fs1">喵立翰 Miao Li-Han</div>
          </div>
        </div>
        <div className="mt-2 container p-0">
          <img src={hero} alt="" />
        </div>
          <ul className="social-btns d-flex justify-content-center d-sm-none bg-white">
            <li>
              <img src={btnFb} alt="" />
            </li>
            <li>
              <img src={btnIg} alt="" />
            </li>
            <li>
              <img src={btnYt} alt="" />
            </li>
          </ul>
        <div className="vfm-bgTheme d-flex justify-content-between overflow-hidden py-1">
          <h2 className="text-white vfm-titleFont text-nowrap">
            為喵星人，護台灣！
          </h2>
          <h2 className="text-white vfm-titleFont text-nowrap">
            從喵的眼中，看見台灣
          </h2>
          <h2 className="text-white vfm-titleFont text-nowrap">
            喵的未來，人的希望
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;

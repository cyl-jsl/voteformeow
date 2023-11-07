import React from "react";
import { Outlet } from "react-router-dom";
import logo from "./icons/logo.png"
import btnFb from "./icons/btnFb.png"
import btnIg from "./icons/btnIg.png"
import btnYt from "./icons/btnYt.png"
import navBtn1 from "./icons/navBtn1.png"
import navBtn2 from "./icons/navBtn2.png"
import navBtn3 from "./icons/navBtn3.png"
import navBtn4 from "./icons/navBtn4.png"
import navBtn5 from "./icons/navBtn5.png"

const Layout = () => {
  return (
    <>
      <div className="section-nav">
        <nav
          className="container-fluid d-flex justify-content-between align-items-center"
        >
          <ul className="logo">
            <li className="d-flex align-items-center">
              <img src={logo} alt="voteformiao-logo" />
              <h3 className="vfm-theme vfm-fs4 ps-1">喵立翰 Miao Li-Han</h3>
            </li>
          </ul>
          <ul className="nav-list-btns d-md-flex vfm-base vfm-priText d-none">
            <li>候選人主張</li>
            <li>最新活動</li>
            <li>政策議題</li>
            <li>小額捐款</li>
            <li>民眾服務信箱</li>
          </ul>
          <ul className="social-btns d-flex">
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
        </nav>
      </div>
      <Outlet />
      <div className="section-footer mb-md-0 mb-5">
        <footer className="container d-md-flex justify-content-between align-items-center py-5">
          <div className="left">
            <ul>
              <li className="d-flex">
                <div className="vfm-gradient rounded-circle text-center">3</div>
                <h3 className="vfm-theme vfm-fs3 vfm-p">喵立翰 Miao Li-Han</h3>
              </li>
              <li className="d-flex">
                <li>
                  <div className="bg-white rounded-circle">
                    <img src={btnFb} alt="" />
                  </div>
                </li>
                <li>
                  <div className="bg-white rounded-circle">
                    <img src={btnIg} alt="" />
                  </div>
                </li>
                <li>
                  <div className="bg-white rounded-circle">
                    <img src={btnYt} alt="" />
                  </div>
                </li>
              </li>
              <li className="vfm-small vfm-priText">
                &#9400; 2023 喵立翰 Miao Li-Han 版權所有
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="vfm-priText">
              <li className="mb-3">
                <h4 className="vfm-fs4">競選總部</h4>
              </li>
              <li>辦公室地址：喵星區 毛茸茸大道88號 喵喵大樓3樓</li>
              <li>電話：(02) 888-5678</li>
              <li>電子郵件地址：meowoffice@linmeow.tw</li>
            </ul>
          </div>
        </footer>
      </div>
      <nav className="d-md-none bg-white fixed-bottom bottom-nav">
        <ul className="row gx-0">
          <li className="col text-center">
            <img src={navBtn1} alt="" />
            <h6>候選人主張</h6>
          </li>
          <li className="col text-center">
            <img src={navBtn2} alt="" />
            <h6>最新活動</h6>
          </li>
          <li className="col text-center">
            <img src={navBtn3} alt="" />
            <h6>政策議題</h6>
          </li>
          <li className="col text-center">
            <img src={navBtn4} alt="" />
            <h6>小額捐款</h6>
          </li>
          <li className="col text-center">
            <img src={navBtn5} alt="" />
            <h6>服務信箱</h6>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;

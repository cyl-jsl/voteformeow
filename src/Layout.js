import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="section-nav">
        <nav className="container-fluid d-flex justify-content-between align-items-center">
          <ul className="logo">
            <li className="d-flex align-items-center">
              <img src="icons/logo.png" alt="voteformiao-logo" />
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
              <img src="/icons/btnFb.png" alt="" />
            </li>
            <li>
              <img src="/icons/btnIg.png" alt="" />
            </li>
            <li>
              <img src="/icons/btnYt.png" alt="" />
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
                    <img src="/icons/btnFb.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="bg-white rounded-circle">
                    <img src="/icons/btnIg.png" alt="" />
                  </div>
                </li>
                <li>
                  <div className="bg-white rounded-circle">
                    <img src="/icons/btnYt.png" alt="" />
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
            <img src="/icons/navBtn1.png  " alt="" />
            <h6>候選人主張</h6>
          </li>
          <li className="col text-center">
            <img src="/icons/navBtn2.png  " alt="" />
            <h6>最新活動</h6>
          </li>
          <li className="col text-center">
            <img src="/icons/navBtn3.png  " alt="" />
            <h6>政策議題</h6>
          </li>
          <li className="col text-center">
            <img src="/icons/navBtn4.png  " alt="" />
            <h6>小額捐款</h6>
          </li>
          <li className="col text-center">
            <img src="/icons/navBtn5.png  " alt="" />
            <h6>服務信箱</h6>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Layout;

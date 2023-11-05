import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li> LOGO</li>
        </ul>
        <ul>
          <li>測試自動化部署</li>
          
          <li>測試自動化部署2浩浩</li>
          <li>候選人主張</li>
          <li>最新活動</li>
          <li>政策議題</li>
          <li>小額捐款</li>
          <li>民眾服務信箱</li>
        </ul>
        <ul>
          <li>fb</li>
          <li>in</li>
          <li>yt</li>
        </ul>
      </nav>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;

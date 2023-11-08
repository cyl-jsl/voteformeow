import React from "react";
import advocate from "../images/advocate.png";

const Advocate = () => {
  return (
    <div className="section-advocate  vfm-bg2">
      <div className="adv-card container bg-white d-md-flex p-0 my-3">
        <div className="left d-flex flex-column align-items-center">
          <div className="vfm-tag vfm-fs6 mb-sm-3">ADVOCATE</div>
          <h3 className="vfm-titleFont vfm-titleColor my-sm-3">候選人<br className="d-none d-md-block d-lg-none"/>主張</h3>
          <div className="vfm-priText vfm-fs3 my-3">
            我堅信 ! 藉由推動更完善的
            <span className="vfm-theme vfm-fs2">貓咪福利</span>
            和相關政策，更是間接地投資於
            <span className="vfm-theme vfm-fs2">台灣的未來</span>。
          </div>
          <div className="vfm-priText vfm-base mt-3">
            畢竟，民眾的身心健康與工作熱情是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣的
            GDP 經濟帶來巨大效益。
            <br /><br />
            因此，我期望能在立法院內推進這些政策，確保每一隻貓咪都能得到他們應有的照顧，同時也為台灣的經濟發展助一臂之力。讓我們一同護航台灣的幸福經濟，從照顧每一隻貓咪開始。
          </div>
        </div>
        <div className="p-0 right">
          <img src={advocate} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Advocate;

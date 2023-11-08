import React from "react";
import news1 from "../images/news1.png";

const NewsCard = (props) => {
  const { newsPicture, newsDate, newsTitle, newsDescription } = props;
  return (
    <div className="news-card row align-items-sm-stretch align-items-md-center align-items-xl-stretch">
      <div className="nc-left col-4 col-md-6 col-xl-4 ">
        <img src={newsPicture} alt="" />
      </div>
      <div className="nc-right col-8 col-md-6 col-xl-8">
        <div className="vfm-small vfm-secText">{newsDate}</div>
        <div className="vfm-fs6 vfm-priText my-2">{newsTitle}</div>
        <div className="vfm-body vfm-priText">
          <div className="ellipsis">{newsDescription}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

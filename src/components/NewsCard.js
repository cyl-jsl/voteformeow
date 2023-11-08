import React from "react";

const NewsCard = (props) => {
  const { newsPicture, newsDate, newsTitle, newsDescription } = props;
  return (
    <div className="news-card d-flex justify-content-between align-items-center">
      <div className="nc-left px-0 m-0 me-2 col-3 col-md-6 col-xl-4 ">
        <img src={newsPicture} alt="" />
      </div>
      <div className="nc-right px-0 m-0 col-9 col-md-6 col-xl-8">
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

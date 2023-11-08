import React from "react";
import NewsCard from "./NewsCard";
import news1 from "../images/news1.png";
import news2 from "../images/news2.png";
import news3 from "../images/news3.png";
import news4 from "../images/news4.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Latest = () => {
  return (
    <div className="section-latest bg-white">
      <div className="d-flex flex-column align-items-center">
        <div className="vfm-tag vfm-fs6 mb-sm-3">LATEST EVENTS</div>
        <h3 className="vfm-titleFont vfm-titleColor my-sm-3">最新活動</h3>
      </div>
      <div className="adv-card container d-md-flex p-0 my-3">
        <div className="left pe-md-4 mb-3 mb-md-0">
          <div className="mb-2">
            <img src={news1} alt="" />
          </div>
          <div>
            <div className="vfm-small vfm-secText my-2">2023/12/26</div>
            <div className="vfm-fs5 vfm-priText mb-2">
              參與台北寵物論壇，爭取貓咪友善環境
            </div>
            <div className="vfm-body vfm-priText">
              炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的
              VIP 休憩空間。
            </div>
          </div>
        </div>
        <div className="right d-flex flex-column align-items-start">
          <NewsCard
            newsPicture={news2}
            newsDate="2023/12/26"
            newsTitle="掃街模式開啟！帶著你的貓耳，來和我一起走！"
            newsDescription="街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！"
          />
          <NewsCard
            newsPicture={news3}
            newsDate="2023/12/26"
            newsTitle="收容所模特兒大比拼！"
            newsDescription="今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！"
          />
          <NewsCard
            newsPicture={news4}
            newsDate="2023/12/26"
            newsTitle="參與台北寵物論壇，爭取貓咪友善環境"
            newsDescription="炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！"
          />
          <div className="morePill d-flex justify-content-center align-items-center">
            <div className="me-2">查看更多</div>
            <ArrowForwardIcon fontSize="large"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const [chart, setChart] = useState({});
  const { id } = useParams();
  const getDetail = async () => {
    const json = await (
      await fetch(`http://localhost:3300/v1/chart/detail/${id}`)
    ).json();
    setChart(json.chart);
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);
  return (
    <section className="container">
      <Link
        to={{
          pathname: "/",
        }}
      >
        <img src={"/images/back_arrow.png"} />
      </Link>
      <div className="title">
        <h1 className="title__text">{chart.title}</h1>
      </div>
      <div className="singer">
        <h4 className="singer__text">{chart.singer}</h4>
      </div>
      <div className="wrapper">
        <div className="bottom">
          <div className="lyricist">
            <span>작사</span>
            <span className="lyricist__text">{chart.lyricist}</span>
          </div>
          <div className="melodizer">
            <span>작곡</span>
            <span className="melodizer__text">{chart.melodizer}</span>
          </div>
          <div className="genre">
            <span>장르</span>
            <span className="genre__text">{chart.genre}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;

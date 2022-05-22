import React, { useEffect, useState } from "react";
import Music from "../components/Music";
import Clock from "react-live-clock";
import "./Home.css";

const Home = () => {
  const [chartType, setChartType] = useState("domestic");
  const [chartList, setChartList] = useState([]);

  useEffect(() => {
    getMusics(chartType);
  }, [chartType]);
  const getMusics = async () => {
    const json = await (
      await fetch(`http://localhost:3300/v1/chart/${chartType}`)
    ).json();
    setChartList(json.chartList);
  };

  return (
    <section className="container">
      <h1 className="title">음악 차트</h1>
      <div>
        <Clock className="time" format={"YYYY년 MM월 DD일 hh:00"} />
      </div>
      <div className={"chartTypeBtn"}>
        <button
          className={chartType === "domestic" ? "red" : ""}
          onClick={() => setChartType("domestic")}
        >
          <h1>국내</h1>
        </button>
        <button
          className={chartType === "overseas" ? "red" : ""}
          onClick={() => setChartType("overseas")}
        >
          <h1>해외</h1>
        </button>
      </div>
      <div className="musics">
        {chartList.map((music) => (
          <Music
            key={music.id}
            id={music.id}
            rank={music.rank}
            title={music.title}
            singer={music.singer}
            imageUrl={music.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

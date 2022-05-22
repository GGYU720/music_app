import React from "react";
import { Link } from "react-router-dom";
import "./Music.css";

const Music = ({ id, rank, title, singer, imageUrl }) => {
  return (
    <div className="music">
      <h5 className="music__rank">{rank}</h5>
      <div>
        <img src={"/images/" + imageUrl} alt={title} title={title} />
      </div>
      <h5 className="music__title">
        <Link
          to={{
            pathname: `/music/${id}`,
            state: {
              id,
              rank,
              title,
              singer,
              imageUrl,
            },
          }}
        >
          {title}
        </Link>
      </h5>
      <h5 className="music__singer">{singer}</h5>
    </div>
  );
};

export default Music;

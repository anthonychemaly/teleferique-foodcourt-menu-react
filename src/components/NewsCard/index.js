import React from "react";
import "./NewsCard.css";

function NewsCard({ hideSub, title, body, imgUrl }) {
  return (
    <div style={{ padding: "2%" }}>
      <div
        className="news-card"
        style={{ backgroundImage: imgUrl !== undefined && `url(${imgUrl})` }}
      ></div>
      <div style={{ padding: "2%" }}>
        <h5
          style={{
            fontFamily: "Jakarta",
            fontWeight: "bold",
            textAlign: "start",
          }}
        >
          {title}
        </h5>
        {!hideSub && (
          <p
            style={{
              fontFamily: "Jakarta",
              fontWeight: "initial",
              textAlign: "start",
            }}
          >
            {body && body.substring(0, 156)+"..."}
          </p>
        )}
      </div>
    </div>
  );
}

export default NewsCard;

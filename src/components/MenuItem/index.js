import React from "react";
import "./MenuItem.css";

function MenuItem({ hideSub, title_EN, title_AR, body, price }) {
  return (
    <div style={{ padding: "2%" }}>
      <div style={{ padding: "2%" }}>
        <h5
          style={{
            fontFamily: "Jakarta",
            fontWeight: "bold",
            textAlign: "start",
          }}
        >
          {title_EN + " - " + title_AR}
        </h5>
        {!hideSub && (
          <p
            style={{
              fontFamily: "Jakarta",
              fontWeight: "initial",
              textAlign: "start",
            }}
          >
            {body && body.substring(0, 156) + "..."}
          </p>
        )}
        <h5
          style={{
            fontFamily: "Jakarta",
            fontWeight: "bold",
            textAlign: "end",
          }}
        >
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "LBP",
          })}
        </h5>
      </div>
    </div>
  );
}

export default MenuItem;

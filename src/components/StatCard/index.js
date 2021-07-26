import React from "react";
import { Dropdown } from "react-bootstrap";

function StatCard({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: color,
        border: "1px solid #EAEDF3",
        borderRadius: "10px",
        padding: "6%",
      }}
    >
      <p
        style={{
          textAlign: "start",
          color: "white",
          textTransform: "uppercase",
          fontFamily: "Jakarta",
          fontSize: "bold",
        }}
      >
        Number of Articles
      </p>
      <h1
        style={{
          textAlign: "start",
          color: "white",
          textTransform: "uppercase",
          fontFamily: "Jakarta",
          fontSize: "bold",
          paddingBottom: "4%",
        }}
      >
        120
      </h1>
      <Dropdown.Divider style={{ padding: "4%" }} />
    </div>
  );
}

export default StatCard;

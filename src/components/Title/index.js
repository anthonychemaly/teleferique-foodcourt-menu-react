import React from "react";

function Title({ children, fontSize }) {
  return (
    <div style={{ borderBottom: "5.5px solid #747473", width: "fit-content" }}>
      <h1
        style={{
          fontFamily: "Jakarta",
          fontWeight: "bold",
          fontSize: fontSize,
        }}
      >
        {children}
      </h1>
    </div>
  );
}

export default Title;

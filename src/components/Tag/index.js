import React from "react";

function Tag({ tagText, onClickButton }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "red",
        padding: "5px",
        borderRadius: "5px",
      }}
    >
      <span style={{ paddingRight: "5px", fontFamily:"Jakarta", }}>{tagText}</span>
      <i
        class="fa fa-times"
        color="white"
        style={{ paddingLeft: "5px", cursor: "pointer" }}
        onClick={onClickButton}
      ></i>
    </div>
  );
}

export default Tag;

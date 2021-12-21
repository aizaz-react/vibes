import React from "react";

const RecordButton = (props) => {
  return (
    <div
      className="record-container"
      onClick={props.recordStart ? props.onStop : props.onClick}
    >
      <div
        className={`record-button ${
          props.recordStatus ? "record-button-start" : ""
        }`}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          style={{
            display: props.recordStart ? "flex" : "none",
            width: "13px",
            height: "13px",
            background: "white",
          }}
        ></div>
      </div>
    </div>
  );
};

export default RecordButton;

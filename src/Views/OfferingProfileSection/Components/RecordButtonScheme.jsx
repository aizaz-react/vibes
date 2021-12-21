import React from "react";

const RecordButtonScheme = (props) => {
  return (
    <div
      className="record-button-scheme-container"
      style={{
        opacity: props.color || props.background ? "1" : "",
        background: props.background ? props.background : "",
      }}
      onClick={props.onClick && props.onClick}
    >
      <p style={{ color: props.color ? props.color : "" }}>{props.title}</p>
    </div>
  );
};

export default RecordButtonScheme;

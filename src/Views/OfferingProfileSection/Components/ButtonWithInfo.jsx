import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const ButtonWithInfo = (props) => {
  return (
    <div
      className="info-input-container"
      style={{
        border:
          props.check && !props.list.includes(props.title)
            ? "2px solid red"
            : "",
        justifyContent: "center",
      }}
    >
      <div
        className="info-id-input"
        style={{
          background: props.background ? "#577954" : "",
        }}
        onClick={props.onButtonClick && props.onButtonClick}
      >
        <p style={{ color: props.background ? "white" : "" }}>{props.title}</p>
      </div>

      <div className="info-icon">
        <img src={InfoIcon} alt="info" />
      </div>
      <div
        className="info-error-message"
        style={{
          display:
            props.check && !props.list.includes(props.title) ? "" : "none",
        }}
      >
        <p>Please Select {props.title}</p>
        <div className="error-arrow"></div>
      </div>
    </div>
  );
};

export default ButtonWithInfo;

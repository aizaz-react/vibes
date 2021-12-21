import React, { useState } from "react";
import "./CustomAlert.css";
import infoIcon from "../../assets/images/errorAlertIcon.svg";

const ErrorAlert = (props) => {
  return (
    <div
      className="error-alert-container-outside"
      style={{ display: props.show ? "flex" : "none" }}
    >
      <img src={infoIcon} alt="error-icon" />
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorAlert;

import React, { useState } from "react";
import "./CustomAlert.css";
import closeIcon from "../../assets/images/lightCloseIcon.svg";
import infoIcon from "../../assets/images/infoIconToast.svg";

const CustomAlert = (props) => {
  const [showToast, setShowToast] = useState(props.show);
  
  return (
    <div className="alert-container-outside">
      <div
        className="alert-container"
        style={{ display: showToast ? "flex" : "none" }}
      >
        <img src={infoIcon} alt="Close Icon" className="alert-info-image" />
        {props.children}
        <img
          src={closeIcon}
          alt="Close Icon"
          className="alert-close-image"
          onClick={() => setShowToast(false)}
        />
      </div>
    </div>
  );
};

export default CustomAlert;

import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const InfoInput = ({ placeholder }) => {
  return (
    <div className="info-input-container">
      <div className="info-id-input">
        <input placeholder={placeholder} />
      </div>
      <div className="info-icon">
        <img src={InfoIcon} alt="info" />
      </div>
    </div>
  );
};

export default InfoInput;

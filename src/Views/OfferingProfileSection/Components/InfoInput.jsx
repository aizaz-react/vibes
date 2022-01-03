import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const InfoInput = ({ placeholder, onChange }) => {
  return (
    <div className="info-input-container">
      <div className="info-id-input">
        <input
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div className="info-icon">
        <img src={InfoIcon} alt="info" />
      </div>
    </div>
  );
};

export default InfoInput;

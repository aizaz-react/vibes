import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";
import euroIcon from "../../../assets/images/euroIcon.svg";

const RateInput = (props) => {
  return (
    <div className="rate-container">
      <div className="left-currency-sign">
        <img src={euroIcon} alt="info" />
      </div>
      <div className="rate-input">
        <input placeholder={props.placeholder} />
      </div>
      <div className="info-icon">
        <img src={InfoIcon} alt="info" />
      </div>
    </div>
  );
};

export default RateInput;

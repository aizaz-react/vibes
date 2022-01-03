import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";
import euroIcon from "../../../assets/images/euroIcon.svg";
import { numberInputValidate } from "../../../functions/numberInput";
const RateInput = ({ placeholder, onChange }) => {
  return (
    <div className="rate-container">
      <div className="left-currency-sign">
        <img src={euroIcon} alt="info" />
      </div>
      <div className="rate-input">
        <input
          onKeyPress={numberInputValidate}
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

export default RateInput;

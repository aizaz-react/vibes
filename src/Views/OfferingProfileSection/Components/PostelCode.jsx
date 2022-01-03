import React from "react";
import germanFlage from "../../../assets/images/germanFlage.svg";
import { numberInputValidate } from "../../../functions/numberInput";

const PostelCode = ({ setAddress, setPostalCode }) => {
  return (
    <div className="postel-code-container">
      <div className="flage-section">
        <img src={germanFlage} alt="flage" />
      </div>
      <div className="code-section">
        <input
          placeholder="ZipCode"
          onKeyPress={numberInputValidate}
          onChange={(e) => setPostalCode(e.target.value)}
          maxLength="5"
        />
      </div>
      <div className="country-section">
        <input
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PostelCode;

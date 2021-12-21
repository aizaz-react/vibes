import React from "react";
import germanFlage from "../../../assets/images/germanFlage.svg";

const PostelCode = () => {
  return (
    <div className="postel-code-container">
      <div className="flage-section">
        <img src={germanFlage} alt="flage" />
      </div>
      <div className="code-section">
        <input />
      </div>
      <div className="country-section">
        <input />
      </div>
    </div>
  );
};

export default PostelCode;

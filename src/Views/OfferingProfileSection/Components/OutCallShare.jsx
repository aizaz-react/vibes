import React, { useState, useEffect } from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const OutCallShare = ({ checkValue }) => {
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    if (confirm !== "") {
      checkValue(confirm);
    }
  }, [confirm]);

  return (
    <div className="outcall-container">
      <div className="outcall-text">
        <p>
          Outcall: Share your <span>vibes ID # 563424</span> <br /> with
          Keep.care
        </p>
      </div>
      <div className="confirm-button-container">
        <div
          className={`confirm-yes ${
            confirm === "Yes" ? "confirm-active-left" : ""
          }`}
          onClick={() => setConfirm("Yes")}
        >
          <p>Yes</p>
        </div>
        <div
          className={`confirm-no ${confirm === "No" ? "confirm-active" : ""}`}
          onClick={() => setConfirm("No")}
        >
          <p>No</p>
        </div>
        <div className="confirm-info">
          <img src={InfoIcon} />
        </div>
      </div>
    </div>
  );
};

export default OutCallShare;

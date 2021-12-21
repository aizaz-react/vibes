import React from "react";
import reloadImg from "../../../assets/images/reload.svg";
import playStore from "../../../assets/images/playStore.svg";
import appStore from "../../../assets/images/appStore.svg";

const KeepCareShare = () => {
  return (
    <div className="keep-share-container">
      <div className="half-line"></div>
      <br />
      <div className="status-line">
        <p>
          <span>Status:</span>Keep.Care is not activate...
        </p>
        <img src={reloadImg} alt="reload" />
      </div>
      <div className="half-line"></div>

      <div className="tag-line">
        <p>
          Download your Safty App - <span>Keep.Care</span>
        </p>
      </div>
      <div className="store-button">
        <img src={playStore} alt="Play Store" />
        <img src={appStore} alt="app Store" />
      </div>
    </div>
  );
};

export default KeepCareShare;

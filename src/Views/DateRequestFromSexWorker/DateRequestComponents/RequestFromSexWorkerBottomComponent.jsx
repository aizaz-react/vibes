import React from "react";
import aeroIcon from "../../../assets/images/aeroIcon.svg";
import vaIcon from "../../../assets/images/va icon.svg";
import userIcon from "../../../assets/images/vibesUser.svg";
import BottomLine from "../../../Views/BottomTabOnlyLogin/BottomLine";
const RequestFromSexWorkerBottomComponent = () => {
  return (
    <>
      <div className="chat-bottom-component-container">
        <div
          style={{
            width: "30%",
            display: "flex",
            height: "7px",
            background: "#FF6600",
            position: "absolute",
            top: "10px",
            borderRadius: "20px",
          }}
        ></div>
        <div className="chat-bottom-icon">
          <img src={aeroIcon} alt="aero icon" />
          <img src={userIcon} alt="aero icon" />
        </div>
        <div style={{ position: "absolute", bottom: "5px" }}>
          <BottomLine />
        </div>
      </div>
    </>
  );
};

export default RequestFromSexWorkerBottomComponent;

import React from "react";
import aeroIcon from "../../../assets/images/aeroIcon.svg";
import vaIcon from "../../../assets/images/va icon.svg";
import userIcon from "../../../assets/images/vibesUser.svg";

const ChatBottomComponent = (props) => {
  return (
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
        <img src={vaIcon} alt="aero icon" />
        <img src={userIcon} alt="aero icon" />
      </div>
    </div>
  );
};

export default ChatBottomComponent;

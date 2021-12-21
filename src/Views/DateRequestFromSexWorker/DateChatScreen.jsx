import React from "react";
import ChatScreenMain from "./DateRequestComponents/ChatScreenMain";
import ChatScreenTopInfo from "./DateRequestComponents/ChatScreenTopInfo";
import ChatBottomComponent from "./DateRequestComponents/ChatBottomComponent";
import vibesLogo from "../../assets/images/logo.svg";

const DateChatScreen = () => {
  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div style={{ position: "absolute", top: "20px" }}>
        <img src={vibesLogo} alt="vibes logo" style={{ width: "100px" }} />
      </div>
      <div style={{ position: "absolute", top: "80px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "16px", color: "#707070" }}>Date</p>
        </div>
      </div>

      <div className="bank-model">
        <ChatScreenTopInfo />
        <ChatScreenMain />
      </div>
      <ChatBottomComponent />
    </div>
  );
};

export default DateChatScreen;

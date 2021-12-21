import React from "react";
import vibesLogo from "../../assets/images/logo.svg";
import ChatBottomComponent from "./DateRequestComponents/ChatBottomComponent";
import ChatScreenTopInfo from "./DateRequestComponents/ChatScreenTopInfo";
import { useHistory } from "react-router";

const DateConfirmFromSexWorker = () => {
  let history = useHistory();

  let handelNext = () => {
    history.push("/qr-scanner-from-sexworker");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
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

      <div style={{ marginTop: "140px" }}>
        <ChatScreenTopInfo outStyle onClick={handelNext} />
      </div>
      <ChatBottomComponent />
    </div>
  );
};

export default DateConfirmFromSexWorker;

import React from "react";
import { useHistory } from "react-router";
import vibesLogo from "../../assets/images/logo.svg";
import ChatScreenTopInfo from "./DateRequestComponents/ChatScreenTopInfo";
import RequestFromSexWorkerBottomComponent from "./DateRequestComponents/RequestFromSexWorkerBottomComponent";

const RequestFromSexWorker = () => {
  let history = useHistory();

  let handelNext = () => {
    history.push("/date-request");
  };
  return (
    <div
      style={{
        height: "calc(100vh - 115px)",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        overflow: "auto",
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
        <ChatScreenTopInfo
          confirmed
          dateStatus="Date: Confirmed"
          datePayment="Payment: wait of transaction"
          onClick={handelNext}
        />
        <br />
        <ChatScreenTopInfo
          waitingConfirmation
          dateStatus="Status: Waiting of your Conformation"
          datePayment="Time left: 04:30 Minutes"
        />
        <br />
        <ChatScreenTopInfo
          waitingConfirmation
          dateStatus="Status: Waiting of your Conformation"
          datePayment="Time left: 04:30 Minutes"
        />
        <br />
      </div>
      <RequestFromSexWorkerBottomComponent />
    </div>
  );
};

export default RequestFromSexWorker;

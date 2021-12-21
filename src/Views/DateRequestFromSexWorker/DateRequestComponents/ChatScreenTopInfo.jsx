import React from "react";
import modelImage from "../../../assets/images/model1.jpg";
import messageIcon from "../../../assets/images/messageIcons.svg";
import kcLogo from "../../../assets/images/kcLogo.svg";

const ChatScreenTopInfo = (props) => {
  let outStyle = {
    background: "#FFF6ED",
    boxSizing: "border-box",
    padding: "10px",
    border: "2px solid darkGray",
    borderRadius: "10px",
  };
  let waitignConfirmedStyle = {
    background: "#FFF6ED",
    boxSizing: "border-box",
    padding: "10px",
    border: "2px solid red",
    borderRadius: "10px",
  };

  return (
    <div
      style={
        props.outStyle
          ? outStyle
          : props.waitingConfirmation
          ? waitignConfirmedStyle
          : props.confirmed
          ? outStyle
          : {}
      }
      onClick={props.onClick && props.onClick}
    >
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div className="model-video-container">
          <img src={modelImage} alt="model-image" />
        </div>

        <div className="chat-top-info-title-container">
          <p className="chat-top-into-title">Phillip</p>
          <p
            className="chat-top-into-start-date"
            style={{
              display:
                props.outStyle || props.confirmed || props.waitingConfirmation
                  ? "none"
                  : "flex",
            }}
          >
            Start your date with
          </p>
          <p className="chat-screen-information">Beginning 20's</p>
          <p className="chat-screen-information">Berlin 5km</p>
          <p className="chat-screen-information">35$/Hour</p>
          <p className="chat-screen-information">
            Sa 24.07.2021 at 19:00 for 2 hours
          </p>
          <div
            className="logo-kc"
            style={{
              display:
                props.outStyle || props.confirmed || props.waitingConfirmation
                  ? "none"
                  : "flex",
            }}
          >
            <img src={kcLogo} alt="kc logo" />
          </div>
        </div>
      </div>
      <div className="bottom-tag-chatinfo">
        <p>{props.dateStatus ? props.dateStatus : "Payment: Complete"}</p>
        <p>
          {props.datePayment
            ? props.datePayment
            : "Ready for Date with Vibes.secure"}
        </p>
      </div>
      <hr
        style={{
          marginTop: "10px",
          borderColor: "#E2DBD2",
          display:
            props.confirmed || props.waitingConfirmation ? "none" : "flex",
        }}
      />
      <div
        style={{
          display: props.outStyle ? "flex" : "none",

          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#919191",
            position: "relative",
          }}
          onClick={props.onClick && props.onClick}
        >
          Message
          <img
            src={messageIcon}
            alt="message-icon"
            style={{ width: "25px", position: "absolute", top: "-10px" }}
          />
        </p>
      </div>
      <div
        style={{
          display: props.outStyle ? "flex" : "none",

          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "80px",
            height: "7px",
            borderRadius: "10px",
            background: "#919191",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ChatScreenTopInfo;

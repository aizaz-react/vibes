import React from "react";
import { useHistory } from "react-router";
import sendIcon from "../../../assets/images/aeroIconColor.svg";

const ChatScreenMain = () => {
  let history = useHistory();
  let handelNext = () => {
    history.push({
      pathname: "/",
      state: { fromChat: true },
    });
  };
  return (
    <div className="chat-screen-container">
      <div
        style={{
          width: "100%",
          height: "80%",

          overflow: "auto",
        }}
      >
        <div className="chat-container left">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: "5px",
              color: "gray",
            }}
          >
            Time : 18:30
          </p>
          <p className="chat-component">
            Nothing Can Dim The Light That Shines Within You, So Keep Radiating,
            The World Needs Your Light.
          </p>
        </div>
        <div className="chat-container right">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "1.1rem",
              marginBottom: "5px",
              color: "gray",
              textAlign: "right",
            }}
          >
            Time : 18:30
          </p>
          <p className="chat-component">
            Nothing Can Dim The Light That Shines Within You, So Keep Radiating,
            The World Needs Your Light.
          </p>
        </div>
      </div>
      <div className="chat-input">
        <div className="chat-input-container">
          <input type="text" placeholder="Type here..." />
        </div>
        <div className="chat-input-icon" onClick={handelNext}>
          <img src={sendIcon} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default ChatScreenMain;

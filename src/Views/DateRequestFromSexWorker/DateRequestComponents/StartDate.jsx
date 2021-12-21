import React, { useState } from "react";
import ModeImage from "../../../assets/images/model1.jpg";

import "./dateRequestComponents.css";

const StartDate = (props) => {
  const [select, setSelect] = useState("Yes");

  return (
    <>
      <div className="start-date-container">
        <div className="start-date-model">
          <img src={ModeImage} alt="model" />
        </div>
        <div className="start-date-info-container">
          <p className="title">Philip</p>
          <p className="request-time">Beginning 20's</p>
          <p className="distance">Berlin 5 km</p>
        </div>
        <div
          className="selection-container"
          style={{ display: props.noAnswer ? "none" : "flex" }}
        >
          <div
            className={`inside-selection ${select === "Yes" && "select-left"}`}
            onClick={() => setSelect("Yes")}
          >
            Yes
          </div>
          <div
            className={`inside-selection ${select === "No" && "select-right"}`}
            onClick={() => setSelect("No")}
          >
            No
          </div>
        </div>
      </div>
      <div
        className="payment-tagline"
        style={{ display: props.noTagLine ? "none" : "flex" }}
      >
        <p>Payment: Complete Ready for Date with Vibes.secure</p>
      </div>
      <hr
        style={{
          marginTop: "10px",
          borderColor: "lightGray",
          outline: "none",
        }}
      />
    </>
  );
};

export default StartDate;

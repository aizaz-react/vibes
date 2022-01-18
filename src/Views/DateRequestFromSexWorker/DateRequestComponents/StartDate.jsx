import React, { useState } from "react";
import ModeImage from "../../../assets/images/model1.jpg";

import "./dateRequestComponents.css";

const StartDate = ({ name, age, address, image, exp, accept, setAccept }) => {
  return (
    <>
      <div className="start-date-container">
        <div className="start-date-model">
          <img src={image} alt="model" />
        </div>
        <div className="start-date-info-container">
          <p className="title">{name}</p>
          <p className="request-time">
            {exp} {age}'s
          </p>
          <p className="distance">{address?.address} 5 km</p>
        </div>
        <div
          className="selection-container"
          style={{ display: "flex" }}
          // style={{ display: props.noAnswer ? "none" : "flex" }}
        >
          <div
            className={`inside-selection ${accept && "select-left"}`}
            onClick={() => setAccept(true)}
          >
            Yes
          </div>
          <div
            className={`inside-selection ${!accept && "select-right"}`}
            onClick={() => setAccept(false)}
          >
            No
          </div>
        </div>
      </div>
      <div
        className="payment-tagline"
        style={{ display: "flex" }}
        // style={{ display: props.noTagLine ? "none" : "flex" }}
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

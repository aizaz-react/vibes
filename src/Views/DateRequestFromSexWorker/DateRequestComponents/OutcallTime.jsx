import React, { useState } from "react";
import TimeComponent from "./TimeComponent";

const OutcallTime = (props) => {
  const [select, setSelect] = useState("Yes");

  return (
    <>
      <div className="outcall-time-container">
        <div className="duration-container" style={{ marginBottom: "10px" }}>
          <div className="time">
            <p>Time:</p>
            <p>17:00 - 23:00</p>
          </div>
          <div className="hours">
            <p>Hours:</p>
            <p>2 Hours</p>
          </div>
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
        style={{
          display: "flex",
          visibility: select === "No" ? "visible" : "hidden",
          width: "100%",
          height: select === "No" ? "100%" : "0px",
          marginBottom: "10px",
        }}
      >
        <TimeComponent />
      </div>
      <hr />
    </>
  );
};

export default OutcallTime;

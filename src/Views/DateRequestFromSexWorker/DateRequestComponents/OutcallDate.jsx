import React, { useState } from "react";
import DateComponent from "./DateComponent";

const OutcallDate = (props) => {
  const [select, setSelect] = useState("Yes");

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <p style={{ fontSize: "1.2rem", color: "gray" }}>
            Date: Today - Sa.24.07.2021
          </p>
          <div
            className="selection-container"
            style={{
              marginBottom: "10px",
              display: props.noAnswer ? "none" : "flex",
            }}
          >
            <div
              className={`inside-selection ${
                select === "Yes" && "select-left"
              }`}
              onClick={() => setSelect("Yes")}
            >
              Yes
            </div>
            <div
              className={`inside-selection ${
                select === "No" && "select-right"
              }`}
              onClick={() => setSelect("No")}
            >
              No
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          visibility: select === "No" ? "visible" : "hidden",
          width: "60%",
          height: select === "No" ? "100%" : "0px",
          marginBottom: "10px",
        }}
      >
        <DateComponent />
      </div>
      <hr />
    </>
  );
};

export default OutcallDate;

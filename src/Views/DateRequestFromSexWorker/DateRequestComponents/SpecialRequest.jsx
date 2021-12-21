import React, { useState } from "react";

const SpecialRequest = (props) => {
  const [select, setSelect] = useState("Yes");

  return (
    <>
      <p
        style={{
          marginTop: "10px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "gray",
        }}
      >
        Special Request
      </p>
      <div className="special-request-container">
        <div className="special-request-text-container">
          <p>
            Nothing can dim the light that shines within your, so keep
            radisting, the world needs yoru light.
          </p>
        </div>
        <div
          className="selection-container"
          style={{ visibility: props.noAnswer ? "hidden" : "visible" }}
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
        className="special-request-text-container"
        style={{
          display: select === "No" ? "flex" : "none",
          width: "60%",
          marginTop: "15px",
        }}
      >
        <p>
          Nothing can dim the light that shines within your, so keep radisting,
          the world needs yoru light.
        </p>
      </div>
    </>
  );
};

export default SpecialRequest;

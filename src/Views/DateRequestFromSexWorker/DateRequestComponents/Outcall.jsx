import React, { useState } from "react";

import ModeImage from "../../../assets/images/model1.jpg";
import ThreePhaseButton from "../../OfferingProfileSection/Components/ThreePhaseButton";

const Outcall = (props) => {
  const [select, setSelect] = useState("Yes");

  return (
    <>
      <div className="out-call-container">
        <div className="outcall-text">
          <p>Outcall: Private</p>
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
      <div className="outcall-video-container">
        <div className="outcall-video-model-video">
          <img src={ModeImage} alt="model" />
        </div>
        <div className="outcall-info">
          <p>Cecilia Chapman</p>
          <p>Mankato Mississippi 96522</p>
        </div>
      </div>
      <div style={{ display: select === "No" ? "flex" : "none" }}>
        <ThreePhaseButton
          left="Incall"
          right="Public Outcall"
          active="Incall"
        />
      </div>
      <hr style={{ marginTop: "10px" }} />
    </>
  );
};

export default Outcall;

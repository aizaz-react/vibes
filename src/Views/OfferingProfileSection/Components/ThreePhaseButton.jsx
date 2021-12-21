import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const ThreePhaseButton = (props) => {
  return (
    <div className="three-phase-button-container">
      <div
        className={`left ${props.active === props.left ? "active-button" : ""}`}
        onClick={props.clickLeft}
      >
        {props.left}
      </div>
      <div
        className={`middle ${
          props.active === props.right
            ? "active-button"
            : props.active === props.left
            ? "right-clear"
            : ""
        }`}
        onClick={props.clickRight}
      >
        {props.right}
      </div>
      <div
        className={`right ${props.active === props.right ? "right-clear" : ""}`}
      >
        <img src={InfoIcon} alt="info" />
      </div>
    </div>
  );
};

export default ThreePhaseButton;

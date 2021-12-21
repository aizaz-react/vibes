import React from "react";

const NavigationView = (props) => {
  return (
    <div className="navigation-section">
      <div className={`rec ${props.active === "1" ? "rec-active" : ""}`}></div>
      <div className={`rec ${props.active === "2" ? "rec-active" : ""}`}></div>
      <div className={`rec ${props.active === "3" ? "rec-active" : ""}`}></div>
      <div className={`rec ${props.active === "4" ? "rec-active" : ""}`}></div>
    </div>
  );
};

export default NavigationView;

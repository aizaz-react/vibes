import React from "react";

const BottomTabsButton = (props) => {
  let { containerClass, onClick } = props;
  return (
    <div className={containerClass} onClick={onClick}>
      <img src={props.userIcon} alt="icon" style={{ width: "2.5rem" }} />
    </div>
  );
};

export default BottomTabsButton;

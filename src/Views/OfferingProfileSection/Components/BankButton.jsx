import React from "react";

const BankButton = (props) => {
  return (
    <div className="bank-button">
      <button
        onClick={props.onClick && props.onClick}
        style={{ background: props.background ? props.background : "" }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default BankButton;

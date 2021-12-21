import React from "react";
import "./bankComponents.css";
const BankInput = (props) => {
  return (
    <div className="bank-input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange && props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default BankInput;

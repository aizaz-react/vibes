import React from "react";
import "./bankComponents.css";
const BankInput = ({
  type,
  placeholder,
  onChange,
  value,
  onKeyPress,
  maxLength,
}) => {
  return (
    <div className="bank-input">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        onKeyPress={onKeyPress && onKeyPress}
        maxLength={maxLength && maxLength}
      />
    </div>
  );
};

export default BankInput;

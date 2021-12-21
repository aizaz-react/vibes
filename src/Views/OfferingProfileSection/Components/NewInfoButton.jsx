import React from "react";
import InfoIcon from "../../../assets/images/infoIconToast.svg";

const NewInfoButton = ({
  title,
  check,
  onButtonClick,

  list,
  ...props
}) => {
  return (
    <div
      className={
        check && !list.includes(title)
          ? "info-button-container-error"
          : "info-button-container"
      }
    >
      <div
        className={
          list.includes(title) ? "info-button-selected" : "info-button"
        }
        onClick={onButtonClick && onButtonClick}
      >
        <p>{title}</p>
      </div>
      <div className="info-icon">
        <img src={InfoIcon} />
      </div>

      <div
        className="info-error-message-new"
        style={{
          display: check && !list.includes(title) ? "" : "none",
        }}
      >
        <p>Please Select {title}</p>
        <div className="error-arrow"></div>
      </div>
    </div>
  );
};

export default NewInfoButton;

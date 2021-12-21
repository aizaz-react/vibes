import React, { useState } from "react";
import "./CustomAlert.css";
import closeIcon from "../../assets/images/lightCloseIcon.svg";
import infoIcon from "../../assets/images/infoIconToast.svg";
import { useHistory } from "react-router";

const CustomAlert = (props) => {
  let history = useHistory();
  const [showToast, setShowToast] = useState(props.show);

  let handelLogin = () => {
    history.push("/login");
  };

  return (
    <div className="alert-container-outside">
      <div
        className="alert-container"
        style={{ display: showToast ? "flex" : "none" }}
      >
        <img src={infoIcon} alt="Close Icon" className="alert-info-image" />
        <p>
          Result: 4 Escort and 6 Sexworker in 5 km. For full access:
          <span onClick={handelLogin}>Login or Registration</span>
        </p>
        <img
          src={closeIcon}
          alt="Close Icon"
          className="alert-close-image"
          onClick={() => setShowToast(false)}
        />
      </div>
    </div>
  );
};

export default CustomAlert;

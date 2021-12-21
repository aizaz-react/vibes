import React from "react";
import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import backIcon from "../../../assets/images/back.svg";
import { useHistory } from "react-router";

const LogoSection = (props) => {
  let history = useHistory();

  let goBack = () => {
    if (props.closeCamera) {
      props.closeCamera();
    }
    history.goBack();
  };
  let goClose = () => {
    if (props.closeCamera) {
      props.closeCamera();
    }
    history.push("/");
  };

  return (
    <div
      className="logo-container"
      style={{
        paddingLeft: props.padding ? "1.5rem" : "",
        paddingRight: props.padding ? "1.5rem" : "",
        boxSizing: "border-box",
      }}
    >
      <div>
        <img
          src={backIcon}
          alt="Close Icon"
          style={{
            width: "13px",
            marginTop: "5px",
            display: props.hideBack ? "none" : "flex",
          }}
          onClick={goBack}
        />
      </div>
      <div>
        <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
      </div>
      <div>
        <img
          src={closeIcon}
          alt="Close Icon"
          style={{ width: "15px" }}
          onClick={goClose}
        />
      </div>
    </div>
  );
};

export default LogoSection;

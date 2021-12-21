import React, { useState, useEffect } from "react";
import "./choseGender.css";
import infoLog from "../../assets/images/VibesInfo.svg";
import closeIcon from "../../assets/images/delete.svg";
import backIcon from "../../assets/images/back.svg";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory, useLocation } from "react-router-dom";

const ChoseGender = (props) => {
  let history = useHistory();

  let location = useLocation();

  const [searchGender, setSearchGender] = useState("");
  const [error, setError] = useState(false);

  let handelGenderClick = (e) => {
    setSearchGender(e.target.innerText);
    setError(false);
  };

  useEffect(() => {
    if (searchGender.length > 0) {
      setTimeout(() => {
        history.push({
          pathname: "/date-of-birth",
          state: {
            ...location.state,
            gender: searchGender,
          },
        });
      }, 500);
    }
  }, [searchGender]);

  let handelBack = () => {
    history.goBack();
  };

  let handelClose = () => {
    setTimeout(() => {
      history.push("/");
    }, 500);
  };

  return (
    <div
      className="div-background"
      style={{ height: `${props.screenHeight}px` }}
    >
      <div className="auth-model-displacement">
        <div className="auth-model " style={{ height: "295px" }}>
          <div className="logo-close-container">
            <div className="logo-center">
              <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
            </div>
            <div className="cross-right" onClick={handelClose}>
              <img src={closeIcon} alt="Close Icon" style={{ width: "12px" }} />
            </div>
            <div className="back-left" onClick={handelBack}>
              <img src={backIcon} alt="Close Icon" style={{ width: "10px" }} />
            </div>
          </div>
          <div className="phone-text-verification">
            <p>
              Choose your <span>gender</span>
            </p>
          </div>
          <div className={error ? "gender-buttons-error" : "gender-buttons"}>
            <div>
              <ButtonGroup size="large">
                <Button
                  style={{
                    color: searchGender === "Male" ? "green" : "#9E9E9E",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                  onClick={handelGenderClick}
                >
                  Male
                </Button>
                <Button
                  onClick={handelGenderClick}
                  style={{
                    color: searchGender === "Female" ? "green" : "#9E9E9E",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                >
                  Female
                </Button>
                <Button
                  onClick={handelGenderClick}
                  style={{
                    color: searchGender === "Divers" ? "green" : "#9E9E9E",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                >
                  Divers
                </Button>
              </ButtonGroup>
            </div>
            <div
              className={error ? "outside-message" : "outside-message-hidden"}
            >
              <div className="inside-message">
                <p>Please select a gender</p>
              </div>
              <div id={error ? "triangle-up" : "triangle-up-hidden"}></div>
            </div>
          </div>

          {/* <div className="phone-input">
            <div>
              <button className="login-button" onClick={handelNext}>
                Next
              </button>
            </div>
          </div> */}

          <div className="bottom-outer-gender">
            <div className="bottom-section-gender">
              <div className="bottom-line-gender selected"></div>
              <div className="bottom-line-gender"></div>
              <div className="bottom-line-gender"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseGender;

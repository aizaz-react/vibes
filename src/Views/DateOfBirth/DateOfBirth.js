import React, { useState, useEffect, useRef } from "react";
import "./dateOfBirth.css";

import infoLog from "../../assets/images/VibesInfo.svg";

import closeIcon from "../../assets/images/delete.svg";
import backIcon from "../../assets/images/back.svg";
import { useHistory, useLocation } from "react-router-dom";
import moment from "moment";
import Alert from "@material-ui/lab/Alert";

const DateOfBirth = (props) => {
  let history = useHistory();
  let location = useLocation();

  // date reference

  let d1Focus = useRef(null);
  let d2Focus = useRef(null);
  let m1Focus = useRef(null);
  let m2Focus = useRef(null);
  let y1Focus = useRef(null);
  let y2Focus = useRef(null);
  let y3Focus = useRef(null);
  let y4Focus = useRef(null);

  let dateObject = {
    d1: "",
    d2: "",
    m1: "",
    m2: "",
    y1: "",
    y2: "",
    y3: "",
    y4: "",
  };

  const [date, setDate] = useState(dateObject);

  const [errorDate, setErrorDate] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (errorDate !== null) {
        setErrorDate(null);
      }
    }, 3000);
  }, [errorDate]);

  let { d1, d2, m1, m2, y1, y2, y3, y4 } = date;

  useEffect(() => {
    let dateString = d1 + d2 + "-" + m1 + m2 + "-" + y1 + y2 + y3 + y4;

    if (dateString.length === 10) {
      let checkValidation = moment(dateString, "DD-MM-YYYY");

      let result = checkValidation.isValid();
      if (result === true) {
        history.push({
          pathname: "/delete-profile",
          state: {
            ...location.state,
            dob: dateString,
          },
        });
      } else {
        setErrorDate("Enter a valid date...");
      }
    }
  }, [date]);

  useEffect(() => {
    if (d1.length > 0) {
      d2Focus.current.focus();
    }
    if (d2.length > 0) {
      m1Focus.current.focus();
    }
    if (m1.length > 0) {
      m2Focus.current.focus();
    }
    if (m2.length > 0) {
      y1Focus.current.focus();
    }
    if (y1.length > 0) {
      y2Focus.current.focus();
    }
    if (y2.length > 0) {
      y3Focus.current.focus();
    }
    if (y3.length > 0) {
      y4Focus.current.focus();
    }
  }, [date]);

  let handelDateChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setDate({ ...date, [e.target.name]: e.target.value });
    }
  };

  let handelEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      let dateString = d1 + d2 + "-" + m1 + m2 + "-" + y1 + y2 + y3 + y4;

      if (dateString.length === 10) {
        let checkValidation = moment(dateString, "DD-MM-YYYY");

        let result = checkValidation.isValid();
        if (result === true) {
          history.push("/delete-profile");
        }
      }
    }
    if (e.key === "Backspace") {
      let name = e.target.name;
      setTimeout(() => {
        changeFocusRevers(name);
      }, 200);
    }
  };

  let changeFocusRevers = (value) => {
    if (value === "y4") {
      y3Focus.current.focus();
    }
    if (value === "y3") {
      y2Focus.current.focus();
    }
    if (value === "y2") {
      y1Focus.current.focus();
    }
    if (value === "y1") {
      m2Focus.current.focus();
    }
    if (value === "m2") {
      m1Focus.current.focus();
    }
    if (value === "m1") {
      d2Focus.current.focus();
    }

    if (value === "d2") {
      d1Focus.current.focus();
    }
  };

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
      <div
        style={{
          position: "absolute",
          top: "50px",
          boxSizing: "border-box",
          padding: "0 15px",
          display: errorDate ? "flex" : "none",
        }}
      >
        <Alert variant="filled" severity="error" style={{ fontSize: "1.6rem" }}>
          {errorDate && errorDate}
        </Alert>
      </div>
      <div className="auth-model-displacement">
        <div className="auth-model-dob " style={{ height: "330px" }}>
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
              <span>Max,</span> how <span>Old</span> are you?
            </p>
          </div>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <div
              className={errorDate ? "date-of-birth-error" : "date-of-birth"}
            >
              <input
                maxLength="1"
                value={d1}
                name="d1"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={d1Focus}
                autoComplete="off"
                autoFocus={true}
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="D"
              />
              <input
                maxLength="1"
                value={d2}
                name="d2"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={d2Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="D"
              />
              <div className="date-slash">
                <p>/</p>
              </div>
              <input
                maxLength="1"
                value={m1}
                name="m1"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={m1Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="M"
              />
              <input
                maxLength="1"
                value={m2}
                name="m2"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={m2Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="M"
              />
              <div className="date-slash">
                <p>/</p>
              </div>
              <input
                maxLength="1"
                value={y1}
                name="y1"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={y1Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="Y"
              />
              <input
                maxLength="1"
                value={y2}
                name="y2"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={y2Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="Y"
              />
              <input
                maxLength="1"
                value={y3}
                name="y3"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={y3Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="Y"
              />
              <input
                maxLength="1"
                value={y4}
                name="y4"
                onKeyDown={handelEnterPress}
                onChange={handelDateChange}
                ref={y4Focus}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
                placeholder="Y"
              />
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
              <div className="bottom-line-gender"></div>
              <div className="bottom-line-gender selected"></div>
              <div className="bottom-line-gender"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateOfBirth;

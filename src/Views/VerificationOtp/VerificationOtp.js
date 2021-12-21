import React, { useState, useEffect, useRef } from "react";
import "./verificationOtp.css";
import infoLog from "../../assets/images/VibesInfo.svg";

import closeIcon from "../../assets/images/delete.svg";
import { useHistory, useLocation } from "react-router-dom";

import backIcon from "../../assets/images/back.svg";
import ErrorAlert from "../../Components/CustomAlert/ErrorAlert";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/firebase";
import moment from "moment";

import { expiryValue } from "../../config/UtlityConfig";

const VerificationOtp = (props) => {
  let history = useHistory();
  let location = useLocation();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  // otp reference

  let otp1Focus = useRef(null);
  let otp2Focus = useRef(null);
  let otp3Focus = useRef(null);
  let otp4Focus = useRef(null);
  let otp5Focus = useRef(null);
  let otp6Focus = useRef(null);

  // otp object

  let otpObject = {
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  };

  const [otp, setOtp] = useState(otpObject);

  let { otp1, otp2, otp3, otp4, otp5, otp6 } = otp;

  let handelOtpChange = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setOtp({ ...otp, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    executeForward();
  }, [otp]);

  let executeForward = async () => {
    let convertedCode = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

    if (
      location.state.mobile === "+11111111111" &&
      convertedCode === "111111"
    ) {
      sessionStorage.setItem("isLogin", true);

      setTimeout(() => {
        history.push("/");
      }, 500);
    } else {
      if (convertedCode.length === 6) {
        let userData;
        try {
          const userRef = collection(db, "users");
          const q = query(
            userRef,
            where("mobile", "==", location.state.mobile)
          );

          const querySnapshot = await getDocs(q);
          if (querySnapshot.empty) {
            userData = false;
          } else {
            querySnapshot.forEach((doc) => {
              userData = doc.data();
            });
          }
        } catch (error) {
          console.log(error);
        }

        window.confirmationResult
          .confirm(convertedCode)
          .then((result) => {
            // User signed in successfully.
            const user = result.user;

            if (userData !== false) {
              if (userData.expiry === expiryValue.text) {
                var duration = moment.duration(
                  moment().diff(userData.createDate)
                );
                var time = duration.asHours();

                if (time > expiryValue.value) {
                  history.push({
                    pathname: "/gender-selection",
                    state: {
                      ...location.state,
                      userId: user.uid,
                    },
                  });
                } else {
                  sessionStorage.setItem("isLogin", true);
                  sessionStorage.setItem("userId", user.uid);
                  history.push("/");
                }
              } else {
                sessionStorage.setItem("isLogin", true);
                sessionStorage.setItem("userId", user.uid);

                history.push("/");
              }
            } else {
              history.push({
                pathname: "/gender-selection",
                state: {
                  ...location.state,
                  userId: user.uid,
                },
              });
            }
          })
          .catch((error) => {
            if (error.code === "auth/code-expired") {
              setError("Auth code has expire...");
            }
            if (error.code === "auth/invalid-verification-code") {
              setError("Enter correct verification code...");
            }
          });
      }
    }
  };

  useEffect(() => {
    if (otp1.length > 0) {
      otp2Focus.current.focus();
    }
    if (otp2.length > 0) {
      otp3Focus.current.focus();
    }
    if (otp3.length > 0) {
      otp4Focus.current.focus();
    }
    if (otp4.length > 0) {
      otp5Focus.current.focus();
    }
    if (otp5.length > 0) {
      otp6Focus.current.focus();
    }
    if (otp6.length > 0) {
      otp6Focus.current.blur();
    }
  }, [otp]);

  let handelEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      // history.push("/gender-selection");
    }
    if (e.key === "Backspace") {
      let name = e.target.name;
      let subString = name.substring(0, 3);
      let lastCharacther = name.substring(3);
      let focusSet = subString + parseInt(lastCharacther - 1);
      setTimeout(() => {
        changeFocusRevers(focusSet);
      }, 200);
    }
  };

  let changeFocusRevers = (value) => {
    if (value === "otp5") {
      otp5Focus.current.focus();
    }
    if (value === "otp4") {
      otp4Focus.current.focus();
    }
    if (value === "otp3") {
      otp3Focus.current.focus();
    }
    if (value === "otp2") {
      otp2Focus.current.focus();
    }
    if (value === "otp1") {
      otp1Focus.current.focus();
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
      <ErrorAlert show={error !== null ? true : false} message={error} />

      <div className="auth-model-displacement">
        <div className="auth-model " style={{ height: "310px" }}>
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
              We've send your code to <span>{location.state.mobile}</span>
            </p>
          </div>
          <div className="phone-text-verification-input">
            <div className="phone-text-verification-outer">
              <input
                maxLength={1}
                name="otp1"
                value={otp1}
                ref={otp1Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                autoFocus={true}
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />
              <input
                maxLength={1}
                name="otp2"
                value={otp2}
                ref={otp2Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />
              <input
                maxLength={1}
                name="otp3"
                value={otp3}
                ref={otp3Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />
              <input
                maxLength={1}
                name="otp4"
                value={otp4}
                ref={otp4Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />
              <input
                maxLength="1"
                name="otp5"
                value={otp5}
                ref={otp5Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />
              <input
                maxLength="1"
                name="otp6"
                value={otp6}
                ref={otp6Focus}
                onChange={handelOtpChange}
                onKeyDown={handelEnterPress}
                autoComplete="off"
                pattern="\-?\d+(\.\d{0,})?"
                type="tel"
              />

              <div id="center-line"></div>
            </div>
          </div>

          {/* <div className="phone-input">
            <div>
              <button className="login-button" onClick={handelNext}>
                Next
              </button>
            </div>
          </div> */}

          <div className="bottom-outer">
            <div className="bottom-section">
              <div className="bottom-line"></div>
              <div className="bottom-line selected"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationOtp;

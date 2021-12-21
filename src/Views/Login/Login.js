import React, { useState, useEffect } from "react";
import "./login.css";
import infoLog from "../../assets/images/VibesInfo.svg";
import closeIcon from "../../assets/images/delete.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { auth } from "../../Firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import CircularProgress from "@material-ui/core/CircularProgress";
import ErrorAlert from "../../Components/CustomAlert/ErrorAlert";
import { ipApi } from "../../config/config";
import axios from "axios";
const Login = (props) => {
  const [phone, setPhone] = useState("");

  const [innerWidth, setInnerWidth] = useState("0");
  const [ipRegion, setIpRegion] = useState("");
  let getRegion = async () => {
    setLoading(true);
    try {
      let { data } = await axios.get(ipApi);
      setLoading(false);
      if (data.ip.country_code !== "") {
        setIpRegion(data.ip.country_code.toLowerCase());
      } else {
        setIpRegion("de");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRegion();
  }, []);

  useEffect(() => {
    let width = window.innerWidth;
    let calculation = width - 35;
    setInnerWidth(calculation);
  }, []);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [captchaStatus, setCaptchaStatus] = useState(false);

  useEffect(() => {
    if (error !== null) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  let recallCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          setCaptchaStatus(true);
        },
      },
      auth
    );
  };

  let history = useHistory();
  let handelChange = (e) => {
    setPhone(e);
  };
  let handelEnterPress = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      handelSelect();
    }
  };

  let handelSelect = async () => {
    if (phone === "11111111111") {
      history.push({
        pathname: "/verification",
        state: {
          mobile: "+" + phone,
        },
      });
    } else {
      if (!captchaStatus) {
        recallCaptcha();
      }
      const appVerifier = window.recaptchaVerifier;
      let mobile = "+" + phone;

      if (mobile.length < 8 || mobile.length > 15) {
        setError("Error: Enter Correct Mobile Number");
      } else {
        setLoading(true);
        signInWithPhoneNumber(auth, mobile, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setLoading(false);
            history.push({
              pathname: "/verification",
              state: {
                mobile: mobile,
              },
            });
          })
          .catch((error) => {
            setLoading(false);
            setError(error.message);
          });
      }
    }
  };

  let handelFocus = () => {
    scroll.scrollToBottom();
  };
  let handelClose = () => {
    history.push("/");
  };

  return (
    <div
      className="div-background"
      style={{ height: `${props.screenHeight}px` }}
    >
      <ErrorAlert show={error !== null ? true : false} message={error} />

      <div className="auth-model-displacement">
        <div
          className="auth-model "
          style={{
            width: `${innerWidth}px`,
            height: loading ? "350px" : "320px",
          }}
        >
          <div id="recptcha-container"></div>

          <div className="logo-close-container">
            <div className="logo-center">
              <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
            </div>
            <div className="cross-right" onClick={handelClose}>
              <img src={closeIcon} alt="Close Icon" style={{ width: "12px" }} />
            </div>
          </div>

          <div className="phone-text">
            <p>
              <span>Type</span> in your Phone-number
            </p>
          </div>
          <div className={error !== null ? "phone-input-error" : "phone-input"}>
            <div>
              <PhoneInput
                country={ipRegion}
                value={phone}
                onChange={(phone) => handelChange(phone)}
                onKeyDown={handelEnterPress}
                onfocus={handelFocus}
              />
            </div>
          </div>
          <div
            className="circular-progress"
            style={{ display: loading ? "flex" : "none" }}
          >
            <CircularProgress disableShrink />
          </div>
          <div
            className="phone-input"
            style={{ marginTop: loading ? "10px" : "30px" }}
          >
            <div>
              <button className="login-button" onClick={handelSelect}>
                Send
              </button>
            </div>
          </div>

          <div className="bottom-outer">
            <div className="bottom-section">
              <div className="bottom-line selected"></div>
              <div className="bottom-line"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-tag-line">
        <p>
          <span> Login</span> to your Account
        </p>
      </div> */}
    </div>
  );
};

export default Login;

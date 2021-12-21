import React, { useState, useEffect } from "react";
import "./deleteUser.css";
import infoLog from "../../assets/images/VibesInfo.svg";
import closeIcon from "../../assets/images/delete.svg";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory, useLocation } from "react-router-dom";

import backIcon from "../../assets/images/back.svg";
import { db } from "../../Firebase/firebase";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { expiryValue } from "../../config/UtlityConfig";
const DeleteUser = (props) => {
  let history = useHistory();
  const [searchGender, setSearchGender] = useState("");

  const [error, setError] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [radioCheck, setRadioCheck] = useState(false);

  let location = useLocation();

  let handelGenderClick = (e) => {
    setSearchGender(e.target.innerText);
  };
  useEffect(() => {
    if (searchGender.length > 0) {
      setDeleteError(false);
    }
  }, [searchGender]);
  useEffect(() => {
    if (radioCheck) {
      setError(false);
    }
  }, [radioCheck]);

  let handelRegister = async () => {
    if (searchGender.length < 1) {
      setDeleteError(true);
    } else if (!radioCheck) {
      setError(true);
    } else {
      try {
        // const docRef = await addDoc(collection(db, "users"), {
        //   ...location.state,
        //   expiry: searchGender,
        //   createDate: Date.now(),
        // });

        await setDoc(doc(db, "users", location.state.userId), {
          ...location.state,
          expiry: searchGender,
          createDate: Date.now(),
        });

        sessionStorage.setItem("isLogin", true);
        sessionStorage.setItem("userId", location.state.userId);

        history.push("/");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  let handelOnChange = (e) => {
    setRadioCheck(e.target.checked);
    setError(false);
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
      <div className="auth-model-displacement">
        <div
          className={
            error || deleteError
              ? "auth-model-delete-profile-error"
              : "auth-model-delete-profile "
          }
        >
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
              <span>Delete </span>my Profile?
            </p>
          </div>
          <div
            className={deleteError ? "delete-buttons-error" : "delete-buttons"}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <div>
              <ButtonGroup size="large">
                <Button
                  style={{
                    color:
                      searchGender === expiryValue.text ? "green" : "#9E9E9E",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                  onClick={handelGenderClick}
                >
                  {expiryValue.text}
                </Button>
                <Button
                  onClick={handelGenderClick}
                  style={{
                    color: searchGender === "Manual" ? "green" : "#9E9E9E",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "bold",
                    background: "white",
                  }}
                >
                  Manual
                </Button>
              </ButtonGroup>
            </div>

            <div
              className={
                deleteError
                  ? "outside-message-delete-user"
                  : "outside-message-delete-user-hidden "
              }
            >
              <div className="inside-message-delete-user">
                <p>Please select any option</p>
              </div>
              <div id="triangle-up-delete-user"></div>
            </div>
          </div>

          <div
            className={error ? "delete-user-gtc-error" : "delete-user-gtc"}
            style={{ marginTop: "20px" }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
              }}
            >
              <input
                type="radio"
                onChange={handelOnChange}
                checked={radioCheck}
              />
              <p>Gtc - General Terms and Conditions</p>
            </div>
          </div>

          <div
            className={
              error
                ? "outside-message-delete-user"
                : "outside-message-delete-user-hidden "
            }
          >
            <div className="inside-message-delete-user">
              <p>Please select GTC</p>
            </div>
            <div id="triangle-up-delete-user"></div>
          </div>

          <div className="phone-input" style={{ marginTop: "15px" }}>
            <div>
              <button className="login-button" onClick={handelRegister}>
                Confirm
              </button>
            </div>
          </div>
          <div className="bottom-outer-gender">
            <div className="bottom-section-gender">
              <div className="bottom-line-gender"></div>
              <div className="bottom-line-gender"></div>
              <div className="bottom-line-gender selected"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;

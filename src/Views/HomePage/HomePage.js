import React, { useRef, useState, useEffect } from "react";
import "./homePage.css";
import CustomAlert from "../../Components/CustomAlert/CustomAlert";
import logo from "../../assets/images/logo.svg";
import SearchLogin from "../SearchLogin/SearchLogin";
import { modelImages } from "../../Dummy/dummy";

import { vaPidKey } from "../../config/config";
import { getMessaging, getToken } from "firebase/messaging";

import selectIcon from "../../assets/images/selectCrossIcon.svg";
import { useLocation } from "react-router";

const Home1 = () => {
  let location = useLocation();

  let isLogin = sessionStorage.getItem("isLogin");
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: vaPidKey })
      .then((currentToken) => {
        if (currentToken) {
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
  }, []);

  useEffect(() => {
    let height = window.innerHeight;
    let calculation = height - 165;
    setInnerHeight(calculation);
  }, []);

  useEffect(() => {
    handelScroll();
  }, [innerHeight]);

  let ref = useRef();
  let handelScroll = (e) => {
    let allDivs = ref.current.children;
    for (let i = 2; i < allDivs.length; i++) {
      let currentDiv = document
        .getElementById(allDivs[i].id)
        .getBoundingClientRect().top;
      if (currentDiv <= 55 && currentDiv > 45) {
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity3",
            "img-opacity4",
            "img-opacity5",
            "img-opacity6"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity2");
      }
      if (currentDiv <= 45 && currentDiv > 35) {
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity4",
            "img-opacity5",
            "img-opacity6"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity3");
      }
      if (currentDiv <= 35 && currentDiv > 25) {
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity5",
            "img-opacity6"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity4");
      }
      if (currentDiv <= 25 && currentDiv > 15) {
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity4",
            "img-opacity6"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity5");
      }
      if (currentDiv <= 15 && currentDiv > 0) {
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity4",
            "img-opacity5"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity6");
      }

      // bottom section transperent
      if (currentDiv >= innerHeight - 50 && currentDiv <= innerHeight) {
        document.getElementById(allDivs[i].id).classList.add("img-opacity6");
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity4",
            "img-opacity5"
          );
      }
      if (currentDiv >= innerHeight - 89 && currentDiv <= innerHeight - 49) {
        document.getElementById(allDivs[i].id).classList.add("img-opacity5");
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity4",
            "img-opacity6"
          );
      }
      if (currentDiv >= innerHeight - 130 && currentDiv <= innerHeight - 89) {
        document.getElementById(allDivs[i].id).classList.add("img-opacity4");
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity3",
            "img-opacity5",
            "img-opacity6"
          );
      }
      if (currentDiv > 55 && currentDiv <= innerHeight - 131) {
        document.getElementById(allDivs[i].id).classList.remove("img-opacity3");
        document
          .getElementById(allDivs[i].id)
          .classList.remove(
            "img-opacity1",
            "img-opacity2",
            "img-opacity4",
            "img-opacity5",
            "img-opacity6"
          );
        document.getElementById(allDivs[i].id).classList.add("img-opacity1");
      }
    }
  };

  let handelImageClick = (e) => {};

  return (
    <div style={{ position: "relative" }}>
      <CustomAlert show={isLogin !== null ? false : true} />

      <div
        style={{
          position: "absolute",
          top: "20px",

          display: "flex",
          justifyContent: "center",
          width: "100%",
          zIndex: "5",
          paddingBottom: "10px",
        }}
      >
        <img src={logo} className="logo-image" alt="logo" />
      </div>

      <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
        <div
          className="grid-container-home1"
          onScroll={handelScroll}
          ref={ref}
          style={{
            height: `${window.innerHeight - 160}px`,
          }}
        >
          <div className="grid-item-home1-empty"></div>
          <div className="grid-item-home1-empty"></div>

          {modelImages.map((item, index) => {
            return (
              <div
                className={
                  isLogin !== null ? "grid-item-home1 " : "grid-item-home1-blur"
                }
                key={index}
                id={`insid${index}`}
                style={{ padding: "3px" }}
                onClick={() => handelImageClick()}
                style={{ position: "relative" }}
              >
                <img
                  src={item.image}
                  style={{
                    border: `4px solid ${item.color}`,
                    boxSizing: "border-box",
                  }}
                  alt="Model Profile"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    display: location.state !== undefined ? "flex" : "none",
                  }}
                >
                  <img
                    src={selectIcon}
                    alt="select"
                    style={{ width: "25px", height: "25px" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <SearchLogin />
    </div>
  );
};

export default Home1;

import React from "react";
import logo from "../../assets/images/logo.svg";
import model1 from "../../assets/images/model1.jpg";
import model2 from "../../assets/images/model2.jpg";
import model3 from "../../assets/images/model3.jpg";
import model4 from "../../assets/images/model4.jpg";
import model5 from "../../assets/images/model5.jpg";
import selectIcon from "../../assets/images/selectCrossIcon.svg";
import vibesUserDark from "../../assets/images/vibesUserDark.svg";
import vibesSearchOrange from "../../assets/images/vibesSearch.svg";

import "./dateRequest.css";
const UserListWithSelectedProfile = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </div>
        <div className="grid-container-selected-profile">
          <div className="selected-profile-item">
            <img
              src={model1}
              alt="model1"
              style={{ border: "4px solid #577954" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model2}
              alt="model1"
              style={{ border: "4px solid #173151" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model3}
              alt="model1"
              style={{ border: "4px solid #577954" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model4}
              alt="model1"
              style={{ border: "4px solid #173151" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model5}
              alt="model1"
              style={{ border: "4px solid #577954" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model1}
              alt="model1"
              style={{ border: "4px solid #173151" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
          <div className="selected-profile-item">
            <img
              src={model2}
              alt="model1"
              style={{ border: "4px solid #577954" }}
            />
            <div
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <img
                src={selectIcon}
                alt="select"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "80px",
          width: "100%",
          background: "white",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          position: "absolute",
          bottom: "0",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "7px",
            background: "#D4A07E",
            width: "80px",
            borderRadius: "20px",
            marginBottom: "10px",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            width: "30%",
            justifyContent: "space-evenly",
          }}
        >
          <img src={vibesSearchOrange} alt="search" style={{ width: "25px" }} />
          <img src={vibesUserDark} alt="vibes-user" style={{ width: "25px" }} />
        </div>
      </div>
    </>
  );
};

export default UserListWithSelectedProfile;

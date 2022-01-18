import React, { useState } from "react";
import radioFill from "../../assets/images/radio fill.svg";
import radioEmpty from "../../assets/images/radio empty.svg";
import germenFlage from "../../assets/images/flageGermeny.svg";
import englandFlage from "../../assets/images/flageEngland.svg";
import "./bottomTabsOnlyLogin.css";
import { setLanguage } from "../../redux/action/languageAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const BottomLine = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const dispatch = useDispatch();

  let handelEnglish = () => {
    dispatch(setLanguage("English"));
    setIsEnglish(true);
  };

  let handelGermen = () => {
    dispatch(setLanguage("German"));

    setIsEnglish(false);
  };

  return (
    <div className="bottomLine">
      {isEnglish ? (
        <img
          src={radioEmpty}
          alt="empty radio"
          className="empty-radio"
          onClick={handelGermen}
        />
      ) : (
        <img
          src={radioFill}
          alt="fill radio"
          className="fill-radio"
          onClick={handelGermen}
        />
      )}
      <p style={{ fontSize: "0.9rem" }}>Ger</p>

      {isEnglish ? (
        <img src={englandFlage} alt="England Flage" className="country-flage" />
      ) : (
        <img src={germenFlage} alt="Germen Flage" className="country-flage" />
      )}

      {isEnglish ? (
        <img
          src={radioFill}
          alt="fill radio"
          className="fill-radio"
          onClick={handelEnglish}
        />
      ) : (
        <img
          src={radioEmpty}
          alt="empty radio"
          className="empty-radio"
          onClick={handelEnglish}
        />
      )}
      <p style={{ fontSize: "0.9rem" }}>Eng</p>
      <div className="verticle-line"></div>
      <p style={{ fontSize: "0.9rem",textDecoration: "none" }}>
        <Link
          to="#"
          onClick={(e) => {
            window.location = "mailto:aizaz9790@gmail.com";
            e.preventDefault();
          }}
          style={{ textDecoration: "none", color:"gray" }}
        >
          Email
        </Link>
      </p>
      <div className="verticle-line"></div>
      <p style={{ fontSize: "0.9rem" }}>
        {isEnglish ? "Support" : "Unterstützung"}
      </p>
      <div className="verticle-line"></div>
      <p style={{ fontSize: "0.9rem" }}>Impressum</p>
      <div className="verticle-line"></div>
      <p style={{ fontSize: "0.9rem" }}>{isEnglish ? "GTC" : "AGB"}</p>
    </div>
  );
};

export default BottomLine;

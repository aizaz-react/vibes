import React, { useState, useEffect } from "react";
import "./searchLogin.css";
import BottomTabsButton from "../BottomTabs/BottomTabsButton";

import SearchIcon from "../../assets/images/vibesSearch.svg";
import SearchIconDark from "../../assets/images/vibesSearchDark.svg";
import PersonIcon from "../../assets/images/vibesUser.svg";
import PersonIconDark from "../../assets/images/vibesUserDark.svg";

import BottomLine from "../BottomTabOnlyLogin/BottomLine";
import EscortButtonGroup from "../../Components/CustomButtonGroup/EscortButtonGroup/EscortButtonGroup";
import GenderButtonGroup from "../../Components/CustomButtonGroup/GenderButtonGroup/GenderButtonGroup";
import Slider from "@material-ui/core/Slider";
import { useHistory } from "react-router";
import LookingOfferingButtonGroup from "../../Components/CustomButtonGroup/LookingOfferingButtonGroup/LookingOfferingButtonGroup";
import { doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../Firebase/firebase";
import { Language } from "../../config/TitleConfig";
import { useSelector } from "react-redux";

const SearchLogin = () => {
  const [indecator, setIndecator] = useState(0);
  const [openBottom, setOpenBottom] = useState(false);
  const [value, setValue] = useState([28, 42]);

  const language = useSelector((state) => state.languageData.language);

  let history = useHistory();
  let isLogin = sessionStorage.getItem("isLogin");

  const [marks, setMarks] = useState([
    {
      value: 18,
      label: Language[language].ageSlider.twenty,
    },

    {
      value: 28,
      label: Language[language].ageSlider.mTwenty,
    },
    {
      value: 42,
      label: Language[language].ageSlider.forty,
    },

    {
      value: 65,
      label: Language[language].ageSlider.fifty,
    },
  ]);
  useEffect(() => {
    setMarks([
      {
        value: 18,
        label: Language[language].ageSlider.twenty,
      },

      {
        value: 28,
        label: Language[language].ageSlider.mTwenty,
      },
      {
        value: 42,
        label: Language[language].ageSlider.forty,
      },

      {
        value: 65,
        label: Language[language].ageSlider.fifty,
      },
    ]);
  }, [language]);

  let levelMarks = [
    {
      value: 1,
      label: Language[language].matchingSlider.all,
    },
    {
      value: 2,
      label: Language[language].matchingSlider.justMe,
    },
    {
      value: 3,
      label: Language[language].matchingSlider.openMind,
    },
    {
      value: 4,
      label: Language[language].matchingSlider.fetish,
    },
  ];

  let [marksRange, setMarksRange] = useState([
    {
      value: 0,
      label: "0 Km",
    },

    {
      value: 25,
      label: "25 Km",
    },
    {
      value: 40,
      label: "40 Km",
    },
  ]);

  let handelSwitching = (e) => {
    setIndecator(e);
  };

  let handleChange = (event, newValue) => {
    let newMarkArray = [
      {
        label:
          newValue[0] === newValue[1]
            ? ""
            : newValue[0] < 28
            ? ""
            : Language[language].ageSlider.twenty,
        value: 18,
      },
      {
        label:
          newValue[0] === newValue[1]
            ? ""
            : newValue[0] < 23
            ? Language[language].ageSlider.twenty
            : newValue[0] <= 27 && newValue[0] >= 23
            ? Language[language].ageSlider.mTwenty
            : newValue[0] >= 28 && newValue[0] <= 32
            ? Language[language].ageSlider.thirty
            : newValue[0] > 32 && newValue[0] <= 37
            ? Language[language].ageSlider.mThirty
            : newValue[0] >= 38 && newValue[0] <= 42
            ? Language[language].ageSlider.forty
            : newValue[0] >= 43 && newValue[0] <= 47
            ? Language[language].ageSlider.mforty
            : Language[language].ageSlider.fifty,
        value: newValue[0],
      },
      {
        label:
          newValue[0] === newValue[1]
            ? ""
            : newValue[1] < 27
            ? Language[language].ageSlider.twenty
            : newValue[1] >= 27 && newValue[1] <= 32
            ? Language[language].ageSlider.thirty
            : newValue[1] > 32 && newValue[1] <= 37
            ? Language[language].ageSlider.mThirty
            : newValue[1] >= 38 && newValue[1] <= 42
            ? Language[language].ageSlider.forty
            : newValue[1] >= 43 && newValue[1] <= 47
            ? Language[language].ageSlider.mforty
            : Language[language].ageSlider.fifty,

        value: newValue[1],
      },
      {
        label:
          newValue[0] === newValue[1]
            ? ""
            : newValue[1] > 47
            ? ""
            : Language[language].ageSlider.fifty,

        value: 65,
      },
    ];
    if (
      newValue[0] === 18 ||
      newValue[1] === 65 ||
      newValue[0] === 65 ||
      newValue[1] === 18 ||
      newValue[0] === newValue[1]
    ) {
    } else {
      setValue(newValue);

      setMarks(newMarkArray);
    }
  };

  let handelLogin = () => {
    history.push("/login");
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (touchStart !== 0 && touchEnd !== 0) {
      if (touchStart > touchEnd) {
        setOpenBottom(true);
      } else if (touchStart < touchEnd) {
        setOpenBottom(false);
      }
    }
  }, [touchEnd]);

  let handelTouchStart = (e) => {
    setTouchStart(e.touches[0].clientY);
  };

  let handelTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientY);
  };

  const [distanceValue, setDistanceValue] = useState(25);

  let handleDistanceChange = (event, value) => {
    setDistanceValue(value);

    let distanceMarks = [
      {
        value: value === 0 ? null : 0,
        label: value === 0 ? "" : value < 5 ? " " : "0 Km",
      },

      {
        value: value,
        label: value + " " + "Km",
      },
      {
        value: value === 40 ? null : 40,
        label: value > 34 ? " " : "40 Km",
      },
    ];

    setMarksRange(distanceMarks);
  };

  const [lavelValue, setLavelValue] = useState(2);
  const [lavelText, setLavelText] = useState("Just me");

  useEffect(() => {
    if (lavelValue === 1) {
      setLavelText("All");
    }

    if (lavelValue === 2) {
      setLavelText("Just me");
    }

    if (lavelValue === 3) {
      setLavelText("Open mind");
    }

    if (lavelValue === 4) {
      setLavelText("Fetish");
    }
  }, [lavelValue]);

  let handelLevelChange = (event, value) => {
    setLavelValue(value);
  };

  let handelOpen = (e) => {
    setOpenBottom(!openBottom);
  };

  const [expandLavel, setExpandLavel] = useState(false);

  let handelLevelTouchStart = () => {
    setTimeout(() => {
      setExpandLavel(true);
    }, 750);
  };
  let handelLevelTouchEnd = () => {
    setExpandLavel(false);
  };

  let handelLogout = async () => {
    sessionStorage.removeItem("isLogin");
    window.location.reload();
  };

  let handelDelete = async () => {
    let uid = sessionStorage.getItem("userId");
    try {
      await deleteDoc(doc(db, "users", uid));

      // auth()
      //   .getUser("20aF90Q8v8dBkFdTHGJ2lb84qdj2")
      //   .then((userRecord) => {
      //     // See the UserRecord reference doc for the contents of userRecord.
      //     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
      //   })
      //   .catch((error) => {
      //     console.log("Error fetching user data:", error);
      //   });
      sessionStorage.removeItem("isLogin");
      sessionStorage.removeItem("userId");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={
        openBottom && indecator === 0
          ? "bottom-user-search-section-height"
          : openBottom && indecator === 1 && isLogin !== null
          ? "bottom-user-section-height"
          : openBottom && indecator === 1 && isLogin === null
          ? "bottom-user-section-height-not-login"
          : "bottom-user-search-section"
      }
    >
      <div
        className={`level-content-section  ${
          expandLavel ? "level-opacity-one" : "level-opacity-zero"
        }`}
      >
        <p className="lavel-text-css">{lavelText}</p>
        <div className="lavel-info-css">
          <p>Text</p>
          <p>Text</p>
          <p>Text</p>
        </div>
      </div>

      <div
        className="open-using-touch"
        onClick={handelOpen}
        onTouchStart={handelTouchStart}
        onTouchEnd={handelTouchEnd}
      ></div>

      <div
        className="touch-swipe-class"
        onTouchStart={handelTouchStart}
        onTouchEnd={handelTouchEnd}
      ></div>

      <div
        style={{
          display: "flex",
          width: "37%",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "35px",
        }}
      >
        <BottomTabsButton
          userIcon={indecator === 0 ? SearchIcon : SearchIconDark}
          containerClass={`login-tab-icon ${
            indecator === 0 ? "tab-icon-selected" : ""
          }`}
          onClick={() => handelSwitching(0)}
        />
        <BottomTabsButton
          userIcon={indecator === 1 ? PersonIcon : PersonIconDark}
          containerClass={`login-tab-icon ${
            indecator === 1 ? "tab-icon-selected" : ""
          }`}
          onClick={() => handelSwitching(1)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <p className="create-profile">{Language[language].creating_profile}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        {isLogin !== null ? (
          <LookingOfferingButtonGroup width="80vw" />
        ) : (
          <button className="login-registration" onClick={handelLogin}>
            {Language[language].login_registration}
          </button>
        )}
      </div>

      {/* filter section */}

      {indecator === 0 ? (
        <>
          <div className="search-line " style={{ zIndex: "-2" }}>
            <div className="inside-search-line" style={{ zIndex: "-1" }}>
              <p>{Language[language].search_filter}</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "20px",
            }}
            className={
              expandLavel ? "escort-opacity-zero" : "escort-opacity-one"
            }
          >
            <EscortButtonGroup width="80vw" />
          </div>

          <div className="match-slider">
            <Slider
              aria-label="custom thumb label"
              marks={levelMarks}
              defaultValue={3}
              max={4}
              min={1}
              value={lavelValue}
              valueLabelDisplay="off"
              onChange={handelLevelChange}
              onTouchStart={handelLevelTouchStart}
              onTouchEnd={handelLevelTouchEnd}
            />
          </div>

          <div>
            <GenderButtonGroup width="80vw" />
          </div>

          <div className="age-slider">
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
              marks={marks}
              min={17}
              max={55}
            />
          </div>
          <div className="location-input">
            <input type="text" placeholder={Language[language].location} />
          </div>

          <div className="distance-slider">
            <Slider
              aria-label="custom thumb label"
              marks={marksRange}
              defaultValue={25}
              max={40}
              value={distanceValue}
              valueLabelDisplay="off"
              onChange={handleDistanceChange}
            />
          </div>
        </>
      ) : (
        <>
          <div className="menu-line ">
            <div className="inside-menu-line">
              <p>Menu</p>
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              marginBottom: isLogin !== null ? "" : "20px",
            }}
          >
            <button className="about-vibes">About Vibes</button>
          </div>

          {isLogin !== null && (
            <>
              <div style={{ marginTop: "30px" }}>
                <button className="about-vibes" onClick={handelDelete}>
                  Delete Profile
                </button>
              </div>
              <div style={{ marginTop: "30px", marginBottom: "20px" }}>
                <button className="about-vibes" onClick={handelLogout}>
                  Logout
                </button>
              </div>
            </>
          )}
        </>
      )}

      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <div
          style={{ height: "1px", width: "100%", background: "#e6e6e6" }}
        ></div>
      </div>

      <div>
        <BottomLine />
      </div>
    </div>
  );
};

export default SearchLogin;

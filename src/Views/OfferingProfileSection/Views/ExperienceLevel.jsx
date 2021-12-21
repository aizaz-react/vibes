import React, { useState, useEffect } from "react";
import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";

import NavigationView from "../Components/NavigationView";
import Slider from "@material-ui/core/Slider";
import { useHistory } from "react-router";
import BankButton from "../Components/BankButton";
import LogoSection from "../Components/LogoSection";
const ExperienceLevel = () => {
  const [sliderValue, setSliderValue] = useState(1);
  let history = useHistory();

  let handelNext = () => {
    history.push("/demo-video");
  };

  let handleSliderChange = (e, v) => {
    setSliderValue(v);
  };

  let sliderMarks = [
    {
      value: 0,
      label: "Just me",
    },

    {
      value: 1,
      label: "Open mind",
    },
    {
      value: 2,
      label: "Fetish",
    },
  ];

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model linear-background">
        <LogoSection padding={false} />

        <div className="experience-head-line">
          <p>Experience Level:</p>
        </div>

        <div className="experience-slider">
          <Slider
            aria-label="custom thumb label"
            marks={sliderMarks}
            defaultValue={1}
            max={2}
            value={sliderValue}
            valueLabelDisplay="off"
            onChange={handleSliderChange}
          />
        </div>

        <div className="expreince-level-text">
          <p>Text</p>
        </div>
        <div className="expreince-level-next-button">
          <BankButton title="Next" onClick={handelNext} />
        </div>

        <div>
          <NavigationView active="2" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceLevel;

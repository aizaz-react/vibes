import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ModeImage from "../../../assets/images/model1.jpg";
import ThreePhaseButton from "../../OfferingProfileSection/Components/ThreePhaseButton";
import playIcon from "../../../assets/images/playButton.svg";

const Outcall = ({ videoUrl,  setOutCall }) => {
  const [select, setSelect] = useState("Yes");
  const [active, setActive] = useState("InCall");

  const history = useHistory();

  let handelPlayVideo = (url) => {
    history.push({
      pathname: "/record-video",
      state: {
        imageUrl: url,
        fromBack: true,
      },
    });
  };

  useEffect(() => {
    setOutCall(select === "No" ? active : "Private");
  }, [active, select]);

  return (
    <>
      <div className="out-call-container">
        <div className="outcall-text">
          <p>Outcall: {"Private"}</p>
        </div>
        <div
          className="selection-container"
          // style={{ display: props.noAnswer ? "none" : "flex" }}
          style={{ display: "flex" }}
        >
          <div
            className={`inside-selection ${select === "Yes" && "select-left"}`}
            onClick={() => setSelect("Yes")}
          >
            Yes
          </div>
          <div
            className={`inside-selection ${select === "No" && "select-right"}`}
            onClick={() => setSelect("No")}
          >
            No
          </div>
        </div>
      </div>
      <div className="outcall-video-container">
        <div className="profile-video">
          <img src={ModeImage} alt="Image" className="modelVideo" />
          <div
            className="input-video"
            onClick={() => handelPlayVideo(videoUrl)}
          >
            <img src={playIcon} alt="image-play" className="play-button" />
          </div>
        </div>
        <div className="outcall-info">
          <p>Cecilia Chapman</p>
          <p>Mankato Mississippi 96522</p>
        </div>
      </div>
      <div style={{ display: select === "No" ? "flex" : "none" }}>
        <ThreePhaseButton
          left="Incall"
          right="Public Outcall"
          active={active}
          setActive={setActive}
        />
      </div>
      <hr style={{ marginTop: "10px" }} />
    </>
  );
};

export default Outcall;

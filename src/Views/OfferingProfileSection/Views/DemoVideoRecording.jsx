import React, { useRef, useState } from "react";
import LogoSection from "../Components/LogoSection";
import NavigationView from "../Components/NavigationView";
import RecordButtonScheme from "../Components/RecordButtonScheme";
import demoVideo from "../../../assets/videos/demo.mp4";
import playButton from "../../../assets/images/playButton.svg";
import reloadVideo from "../../../assets/images/reloadVideo.svg";
import endVideoIcon from "../../../assets/images/deleteBlack.svg";
import { useHistory } from "react-router";

const DemoVideoRecording = () => {
  let history = useHistory();

  const videoRef = useRef();
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [reloadNext, setReloadNext] = useState(false);
  let playVideo = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };

  let myCallback = () => {
    setReloadNext(true);
  };

  let replay = () => {
    videoRef.current.play();
    setReloadNext(false);
  };

  let handelNext = () => {
    history.push("/record-video");
  };

  let handelVideoEnd = () => {
    setShowPlayButton(false);
    videoRef.current.pause();
    setReloadNext(true);
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model linear-background">
        <LogoSection padding={false} />

        <div className="demo-video-headline">
          <p>Recording the Video</p>
        </div>
        <div className="video-container">
          <video
            className="videoInsertDemo"
            // src="https://vibes-files.s3.amazonaws.com/demo.mp4"
            src="https://firebasestorage.googleapis.com/v0/b/vibes-10cab.appspot.com/o/video%2Fsample.mp4?alt=media&token=36f73a4f-9eb5-42b2-8379-1c28020106b7"
            // src="https://firebasestorage.googleapis.com/v0/b/vibes-10cab.appspot.com/o/video%2Fdemo.mp4?alt=media&token=c43436bd-8089-41e1-805b-c31f5df808f8"
            type="video/mp4"
            ref={videoRef}
            onEnded={() => myCallback()}
          ></video>

          {/* play button section */}

          <div
            className="controle-button-section"
            style={{ display: showPlayButton ? "" : "none" }}
          >
            <img src={playButton} alt="Play Button" onClick={playVideo} />
          </div>

          <div
            className="reload-record-container"
            style={{ display: reloadNext ? "" : "none" }}
          >
            <div className="reload-icon" onClick={replay}>
              <img src={reloadVideo} alt="Reload" />
            </div>
            <div className="record-icon" onClick={handelNext}>
              <p>Record</p>
            </div>
          </div>

          <div className="record-scheme-container">
            <RecordButtonScheme title="Red" background="white" />
            <RecordButtonScheme title="Green" background="white" />
            <RecordButtonScheme title="Blue" background="white" />
            <RecordButtonScheme title="Orange" background="white" />
          </div>
          <div className="video-end-button" onClick={handelVideoEnd}>
            <img src={endVideoIcon} alt="delete" />
          </div>
        </div>
        <div
          style={{
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            boxSizing: "border-box",
          }}
        >
          <NavigationView active="3" />
        </div>
      </div>
    </div>
  );
};

export default DemoVideoRecording;

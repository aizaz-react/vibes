import React from "react";
import model2 from "../../../assets/images/model2.jpg";
import "./bankComponents.css";
import playIcon from "../../../assets/images/playButton.svg";

const WorkerVideo = ({ playVideo, videoUrl }) => {
  return (
    <div className="profile-video-container">
      <div className="profile-video">
        <img src={model2} alt="Image" className="modelVideo" />

        {/* <video src={videoUrl} className="modelVideo"></video> */}

        <div className="input-video" onClick={playVideo}>
          <img src={playIcon} alt="image-play" className="play-button" />
        </div>
      </div>
      <div className="profile-brief">
        <p>
          Nothing can dim the light that shines within you, so keep radiating,
          the world needs.
        </p>
      </div>
    </div>
  );
};

export default WorkerVideo;

import React from "react";
import "./bankComponents.css";
import model1 from "../../../assets/images/model1.jpg";
import uploadIcon from "../../../assets/images/uploadPlusIcon.svg";
import CircularProgress from "@material-ui/core/CircularProgress";

const WorkerProfile = ({
  title,
  time,
  rate,
  location,
  uploadImage,
  loading,
  image,
  ...props
}) => {
  return (
    <div className="profile-container">
      <div className="profile-image">
        <img src={model1} alt="Image" className="model-image" />
        <div className="input-image">
          <label for="file-input">
            <img src={uploadIcon} alt="upload" className="upload-model-image" />
          </label>
          <input id="file-input" type="file" onChange={uploadImage} />
        </div>

        <CircularProgress
          disableShrink
          style={{
            width: "25px",
            height: "25px",
            marginRight: "10px",
            color: "white",
            position: "absolute",
            top: "35%",
            left: "35%",
            display: loading ? "flex" : "none",
          }}
        />
      </div>
      <div className="profile-info">
        <p className="profile-title">{title && title}</p>
        <p className="profile-timing">{time && time}</p>
        <p className="profile-rate">{rate && rate}</p>
        <p className="profile-location">{location && location}</p>
      </div>
    </div>
  );
};

export default WorkerProfile;

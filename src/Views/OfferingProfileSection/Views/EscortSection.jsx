import React, { useState, useEffect } from "react";

import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import backIcon from "../../../assets/images/back.svg";
import ThreePhaseButton from "../Components/ThreePhaseButton";
import WorkerProfile from "../Components/WorkerProfile";
import WorkerVideo from "../Components/WorkerVideo";
import RateInput from "../Components/RateInput";
import InfoInput from "../Components/InfoInput";
import OrLine from "../Components/OrLine";
import PostelCode from "../Components/PostelCode";
import BankInput from "../Components/BankInput";
import BankButton from "../Components/BankButton";
import OutCallShare from "../Components/OutCallShare";
import NavigationView from "../Components/NavigationView";
import { useHistory } from "react-router";
import LogoSection from "../Components/LogoSection";
import KeepCareShare from "../Components/KeepCareShare";

import {
  updateImageUrl,
  uploadFile,
  getUserData,
} from "../../../Utlity/FirebaseFunction";

const EscortSection = () => {
  let history = useHistory();
  const [workerType, setWorkerType] = useState("Escort");
  const [checkShare, setCheckShare] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  let handelEscort = (e) => {
    setWorkerType(e);
    history.push("/escort-section");
  };
  let handelSexworker = (e) => {
    setWorkerType(e);
    history.push("/sexworker-section");
  };

  let handelNext = () => {
    history.push("/bankdetails-section");
  };
  let handelValue = (v) => {
    setCheckShare(v);
  };

  let hanelImageUpload = async (e) => {
    let file = e.target.files[0];
    if (file) {
      let userId = sessionStorage.getItem("userId");
      setLoading(true);

      let result = await uploadFile(
        file,
        "image/jpeg",
        userId + "Image",
        "image/"
      );

      await updateImageUrl(userId, result);
      setLoading(false);
      await getImageAndVideo();
    }
  };

  useEffect(() => {
    getImageAndVideo();
  }, []);

  let getImageAndVideo = async () => {
    let userId = sessionStorage.getItem("userId");
    try {
      let result = await getUserData(userId);
      if (result) {
        setImageUrl(result.imageUrl);
        setVideoUrl(result.videoUrl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handelPlayVideo = (url) => {
    history.push({
      pathname: "/record-video",
      state: {
        imageUrl: url,
        fromBack: true,
      },
    });
  };

  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="bank-model">
        {/* logo container */}

        <LogoSection />

        {/* button section */}
        <div>
          <ThreePhaseButton
            left="Escort"
            right="Sexworker"
            clickLeft={() => handelEscort("Escort")}
            clickRight={() => handelSexworker("Sexworker")}
            active={workerType}
          />
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <OutCallShare checkValue={(value) => handelValue(value)} />
        </div>
        <div style={{ display: checkShare === "Yes" ? "flex" : "none" }}>
          <KeepCareShare />
        </div>
        <div className="straight-line"></div>

        <div style={{ marginTop: "2rem" }}>
          <WorkerProfile
            title="Anna [Sex Worker]"
            time="Beginsning 20's"
            rate="20$/Hour, Incall"
            location="02176, Berlin - Incall"
            loading={loading}
            image={imageUrl}
            uploadImage={(e) => hanelImageUpload(e)}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <WorkerVideo
          // videoUrl={videoUrl}
          // playVideo={() => handelPlayVideo(videoUrl)}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p className="rate-head-line">Basic Rate Per Hour:</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <RateInput />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <p className="rate-head-line">Location</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <PostelCode />
        </div>

        <div style={{ marginTop: "2rem" }}>
          <BankButton title="Next" onClick={handelNext} />
        </div>
        <div>
          <NavigationView active="3" />
        </div>
      </div>
    </div>
  );
};

export default EscortSection;

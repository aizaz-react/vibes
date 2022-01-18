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
import NavigationView from "../Components/NavigationView";
import model1 from "../../../assets/images/model1.jpg";

import { useHistory } from "react-router";
import OutCallShare from "../Components/OutCallShare";
import KeepCareShare from "../Components/KeepCareShare";
import LogoSection from "../Components/LogoSection";
import {
  updateImageUrl,
  uploadFile,
  getUserData,
} from "../../../Utlity/FirebaseFunction";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const CallInfoSection = () => {
  let history = useHistory();

  const [workerType, setWorkerType] = useState("Sexworker");
  const [callType, setCallType] = useState("Outcall");

  const [checkShare, setCheckShare] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [rate, setRate] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");

  let handelEscort = (e) => {
    setWorkerType(e);
    history.push("/escort-section");
  };
  let handelSexworker = (e) => {
    setWorkerType(e);
    history.push("/sexworker-section");
  };

  let handelNext = async () => {
    let userId = sessionStorage.getItem("userId");
    let sexWorkerData = {
      rate,
      address,
      postalCode,
      callType,
      location,
      street,
    };
    try {
      const userRef = doc(db, "users", userId);

      await updateDoc(userRef, {
        escort: false,
        ecsortData: {},
        sexWorkerData,
        offering: "sexWorker",
      });
      history.push("/bankdetails-section");
    } catch (error) {
      console.log(error);
    }
  };

  let handelValue = (v) => {
    setCheckShare(v);
  };

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

  useEffect(() => getImageAndVideo(), []);

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
        <div style={{ marginTop: "2rem" }}>
          <ThreePhaseButton
            left="Incall"
            right="Outcall"
            clickLeft={() => setCallType("Incall")}
            clickRight={() => setCallType("Outcall")}
            active={callType}
          />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: callType === "Outcall" ? "" : "none",
          }}
        >
          <OutCallShare checkValue={(value) => handelValue(value)} />
        </div>
        <div style={{ display: checkShare === "Yes" ? "flex" : "none" }}>
          <KeepCareShare />
        </div>
        <div className="straight-line " style={{ marginTop: "1.5rem" }}></div>
        <div style={{ marginTop: "2rem" }}>
          <WorkerProfile
            title="Anna [Sex Worker]"
            time="Beginsning 20's"
            rate="20$/Hour, Incall"
            location="02176, Berlin - Incall"
            image={!imageUrl ? model1 : model1}
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <WorkerVideo
            videoUrl={videoUrl}
            playVideo={() => handelPlayVideo(videoUrl)}
          />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <p className="rate-head-line">Basic Rate Per Hour:</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <RateInput onChange={setRate} placeholder="0$" />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <p className="rate-head-line">Address:</p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <PostelCode setAddress={setAddress} setPostalCode={setPostalCode} />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: callType === "Incall" ? "" : "none",
          }}
        >
          <InfoInput onChange={setLocation} placeholder="Hotel / Bar Name" />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: callType === "Incall" ? "" : "none",
          }}
        >
          <InfoInput onChange={setStreet} placeholder="Street" />
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

export default CallInfoSection;

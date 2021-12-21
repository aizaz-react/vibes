import React, { useState } from "react";

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

import { useHistory } from "react-router";
import OutCallShare from "../Components/OutCallShare";
import KeepCareShare from "../Components/KeepCareShare";
import LogoSection from "../Components/LogoSection";

const CallInfoSection = () => {
  let history = useHistory();

  const [workerType, setWorkerType] = useState("Sexworker");
  const [callType, setCallType] = useState("Outcall");

  const [checkShare, setCheckShare] = useState("");

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
          />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <WorkerVideo />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <p className="rate-head-line">Basic Rate Per Hour:</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <RateInput />
        </div>
        <div style={{ marginTop: "1.5rem" }}>
          <p className="rate-head-line">Address:</p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <PostelCode />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: callType === "Incall" ? "" : "none",
          }}
        >
          <InfoInput placeholder="Hotel / Bar Name" />
        </div>
        <div
          style={{
            marginTop: "1.5rem",
            display: callType === "Incall" ? "" : "none",
          }}
        >
          <InfoInput placeholder="Street" />
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

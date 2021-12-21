import React from "react";
import { useHistory } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import ThreePhaseButton from "../OfferingProfileSection/Components/ThreePhaseButton";
import Outcall from "./DateRequestComponents/Outcall";
import OutcallDate from "./DateRequestComponents/OutcallDate";
import OutcallTime from "./DateRequestComponents/OutcallTime";
import PriceCalculator from "./DateRequestComponents/PriceCalculator";
import SpecialRequest from "./DateRequestComponents/SpecialRequest";
import StartDate from "./DateRequestComponents/StartDate";

const DateConfirmProfileFromSexWorker = () => {
  let history = useHistory();

  let handelNext = () => {
    history.push("/qr-code-profile");
  };
  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100%" }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />
        <StartDate noAnswer />
        <Outcall noAnswer />
        <OutcallDate noAnswer />
        <OutcallTime noAnswer />
        <SpecialRequest noAnswer />
        <PriceCalculator />
        <div style={{ marginTop: "20px" }}>
          <ThreePhaseButton left="Modify" right="Cancel" active="Cancel" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <p style={{ fontWeight: "500", color: "gray" }}>
            If You Confirm, We Cancel Your Date For You
          </p>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <BankButton title="Confirm" onClick={handelNext} />
        </div>
      </div>
    </div>
  );
};

export default DateConfirmProfileFromSexWorker;

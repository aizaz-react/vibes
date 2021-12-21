import React from "react";
import { useHistory } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";

import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import RateInput from "../OfferingProfileSection/Components/RateInput";
import Outcall from "./DateRequestComponents/Outcall";
import OutcallDate from "./DateRequestComponents/OutcallDate";
import OutcallTime from "./DateRequestComponents/OutcallTime";
import SpecialRequest from "./DateRequestComponents/SpecialRequest";
import StartDate from "./DateRequestComponents/StartDate";

const DateRequest = () => {
  let history = useHistory();
  let handelNext = () => {
    history.push("/date-confirm-from-sex-worker");
  };
  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100%" }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />

        <StartDate />
        <Outcall />
        <OutcallDate />
        <OutcallTime />
        <SpecialRequest />
        <p
          style={{
            marginTop: "10px",
            fontWeight: "bold",
            color: "gray",
            fontSize: "1.1rem",
          }}
        >
          Your Price For The Request:
        </p>
        <div
          style={{
            display: "flex",
            width: "80%",
            marginTop: "10px",
          }}
        >
          <RateInput />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <BankButton title="Send Answer" onClick={handelNext} />
        </div>
      </div>
    </div>
  );
};

export default DateRequest;

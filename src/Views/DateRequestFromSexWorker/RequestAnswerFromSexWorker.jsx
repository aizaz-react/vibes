import React from "react";
import { useHistory } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import Outcall from "./DateRequestComponents/Outcall";
import OutcallDate from "./DateRequestComponents/OutcallDate";
import OutcallTime from "./DateRequestComponents/OutcallTime";
import SpecialRequest from "./DateRequestComponents/SpecialRequest";
import StartDate from "./DateRequestComponents/StartDate";

const RequestAnswerFromSexWorker = () => {
  let history = useHistory();

  let handelNext = () => {
    history.push("/date-chat");
  };

  return (
    <div
      className="div-background"
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <div className="bank-model">
        <LogoSection />
        <StartDate noAnswer noTagLine />
        <Outcall noAnswer />
        <OutcallDate />
        <OutcallTime />
        <SpecialRequest noAnswer />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <p style={{ fontWeight: "600", color: "gray" }}>
            If Not Accept From Philip, We Cancel Your Date!
          </p>
        </div>
        <div>
          <BankButton title="Send Modification" onClick={handelNext} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "70px",
              height: "7px",
              borderRadius: "20px",
              background: "#577954",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RequestAnswerFromSexWorker;

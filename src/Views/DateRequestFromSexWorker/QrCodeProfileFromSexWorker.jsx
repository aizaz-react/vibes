import React from "react";
import { useHistory } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import RateInput from "../OfferingProfileSection/Components/RateInput";
import DateComponent from "./DateRequestComponents/DateComponent";

import StartDate from "./DateRequestComponents/StartDate";
import TimeComponent from "./DateRequestComponents/TimeComponent";

const QrCodeProfileFromSexWorker = () => {
  let history = useHistory();
  let handelNext = () => {
    history.push("/request-answer-from-sexworker");
  };

  return (
    <div
      className="div-background"
      style={{
        paddingTop: "20px",
        paddingBottom: "20px",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />
        <StartDate noAnswer noTagLine />
        <div
          style={{
            display: "flex",
            width: "60%",
            marginTop: "10px",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "darkGray",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Date
          </p>
          <DateComponent />
        </div>
        <hr
          style={{
            marginTop: "10px",
            borderColor: "lightGray",
            outline: "none",
          }}
        />
        <div
          style={{
            display: "flex",

            marginTop: "10px",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "darkGray",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Time / Hours
          </p>
          <TimeComponent />
        </div>
        <hr
          style={{
            marginTop: "10px",
            borderColor: "lightGray",
            outline: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "70%",

            marginTop: "10px",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              fontSize: "1.3rem",
              color: "darkGray",
              fontWeight: "600",
              marginBottom: "5px",
            }}
          >
            Price
          </p>
          <RateInput placeholder="0.00" />
        </div>
        <div>
          <BankButton title="Submit" onClick={handelNext} />
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

export default QrCodeProfileFromSexWorker;

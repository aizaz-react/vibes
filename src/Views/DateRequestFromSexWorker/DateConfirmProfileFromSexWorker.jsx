import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import ThreePhaseButton from "../OfferingProfileSection/Components/ThreePhaseButton";
import Outcall from "./DateRequestComponents/Outcall";
import OutcallDate from "./DateRequestComponents/OutcallDate";
import OutcallTime from "./DateRequestComponents/OutcallTime";
import PriceCalculator from "./DateRequestComponents/PriceCalculator";
import SpecialRequest from "./DateRequestComponents/SpecialRequest";
import StartDate from "./DateRequestComponents/StartDate";
import model8 from "../../assets/images/model8.jpg";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../Firebase/firebase";

const DateConfirmProfileFromSexWorker = () => {
  const { id } = useParams();
  const [accept, setAccept] = useState(true);
  const [date, setDate] = useState("");
  const [outCall, setOutCall] = useState(false);
  const [time, setTime] = useState("");
  const [hours, setHours] = useState("");
  const [modify, setModify] = useState("Accept");
  const [request, setRequest] = useState({});
  const [action, setAction] = useState("Accept");
  let history = useHistory();
  let handelNext = async () => {
    if (modify === "Modify") return history.push("/qr-code-profile");
    if (modify === "Reject") {
      try {
        await deleteDoc(doc(db, "request", id));
        history.push("/");
      } catch (error) {
        console.log("Error: " + error);
      }
    }
    if (modify === "") {
      try {
        await updateDoc(doc(db, "request", id), {
          status: "Accepted",
        });
        history.push("/");
      } catch (error) {
        console.log("Error: " + error);
      }
    }
  };

  const getRequest = async () => {
    try {
      let data = await getDoc(doc(db, "request", id));
      setRequest(data.data());
      setHours(data.data().hours);
      setDate(data.data().date);
      setTime(data.data().time);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRequest();
  }, [modify]);
  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100%" }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />
        <StartDate
          image={model8}
          accept={accept}
          setAccept={setAccept}
          age="20"
          address={{ address: "berlin" }}
          exp={"Beginning"}
          noAnswer
          name="Berlin"
        />
        <Outcall setOutCall={setOutCall} noAnswer />
        <OutcallDate date={date} setDate={setDate} noAnswer />
        <OutcallTime
          time={time}
          setTime={setTime}
          hours={hours}
          setHours={setHours}
          noAnswer
        />
        <SpecialRequest noAnswer />
        <PriceCalculator
          rate={request.rate}
          hours={hours}
          specialRequest={100}
        />
        <div style={{ marginTop: "20px" }}>
          <ThreePhaseButton
            left="Accept"
            right="Reject"
            active={modify}
            clickLeft={() => {
              setModify("Accept");
              setAction("Confirm");
            }}
            clickRight={() => {
              setModify("Reject");
              setAction("Confirm");
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <p style={{ fontWeight: "500", color: "gray" }}>
            {modify === "Reject" && "Are you sure you want to Reject"}
            {modify === "Accept" && "Are you sure you want to Accept"}
            {modify === "" && "Are you sure you want to Accept"}
          </p>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <BankButton title={action} onClick={handelNext} />
        </div>
      </div>
    </div>
  );
};

export default DateConfirmProfileFromSexWorker;

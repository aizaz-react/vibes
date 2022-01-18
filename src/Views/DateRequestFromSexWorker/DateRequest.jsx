import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import BankButton from "../OfferingProfileSection/Components/BankButton";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import RateInput from "../OfferingProfileSection/Components/RateInput";
import Outcall from "./DateRequestComponents/Outcall";
import OutcallDate from "./DateRequestComponents/OutcallDate";
import OutcallTime from "./DateRequestComponents/OutcallTime";
import SpecialRequest from "./DateRequestComponents/SpecialRequest";
import StartDate from "./DateRequestComponents/StartDate";
import moment from "moment";
import { notificationSend } from "../../Utlity/FirebaseFunction";
import { auth, db } from "../../Firebase/firebase";
import { getAge } from "../../functions/getAge";
import {
  collection,
  query,
  where,
  onSnapshot,
  Timestamp,
  addDoc,
} from "firebase/firestore";

const DateRequest = () => {
  const { data } = useParams();
  let offeringProfile = data.split(",");
  const currentUser = auth.currentUser;
  const [age, setAge] = useState(0);
  const [offerProfile, setOfferProfile] = useState({});
  const [currentProfile, setCurrentProfile] = useState({});
  const [accept, setAccept] = useState(true);
  const [rate, setRate] = useState(0);
  const [outCall, setOutCall] = useState("Private");
  const [date, setDate] = useState(moment().format("[Today] DD.MM.yyyy"));
  const [time, setTime] = useState("");
  const [hours, setHours] = useState("1 Hour");
  const [specialRequest, setSpecialRequest] = useState("Yes");
  const history = useHistory();
  let {
    bankDetails,
    sexWorkerData,
    ecsortData,
    imageUrl,
    videoUrl,
    expereniceLevel,
    dob,
    token,
  } = offerProfile;

  const handleAddRequest = async (e) => {
    if (!accept) return console.error("please accept profile");
    if (!rate) return console.error("please add rate");
    e.preventDefault();
    try {
      await addDoc(collection(db, "request"), {
        status: "pending",
        request: accept,
        rate,
        outCall,
        date,
        time,
        hours,
        specialRequest,
        sender: currentUser && currentUser.uid,
        receiveTime: Timestamp.fromDate(new Date()),
        receiver: offeringProfile[0],
        // senderProfilePicture: currentUser.imageUrl,
      });
      notificationSend("New Request", token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentUser = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("userId", "in", [currentUser.uid]));
      const unsub = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          setCurrentProfile(snapshot.data());
        });
      });
      return () => unsub();
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOfferingProfiles = async () => {
    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("userId", "in", [offeringProfile[0]]));
      const unsub = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((snapshot) => {
          setOfferProfile(snapshot.data());
        });
      });
      return () => unsub();
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    setAge(getAge(dob));
    getOfferingProfiles();
    currentUser && getCurrentUser();
  }, [dob, currentUser]);

  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100%" }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />
        <StartDate
          name={bankDetails && bankDetails.name}
          age={age}
          address={sexWorkerData ? sexWorkerData : ecsortData}
          image={imageUrl}
          exp={expereniceLevel}
          setAccept={setAccept}
          accept={accept}
        />
        <Outcall
          address={sexWorkerData ? sexWorkerData : ecsortData}
          videoUrl={videoUrl}
          setOutCall={setOutCall}
        />
        <OutcallDate date={date} setDate={setDate} />
        <OutcallTime
          time={time}
          setTime={setTime}
          setHours={setHours}
          hours={hours}
        />
        <SpecialRequest
          specialRequest={specialRequest}
          setSpecialRequest={setSpecialRequest}
        />
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
        <RateInput onChange={setRate} placeholder="0$" />
        <div style={{ marginBottom: "20px" }}>
          <BankButton
            title="Send Answer"
            disabled={accept}
            onClick={handleAddRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default DateRequest;

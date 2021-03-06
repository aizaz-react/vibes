import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import vibesLogo from "../../assets/images/logo.svg";
import ChatScreenTopInfo from "./DateRequestComponents/ChatScreenTopInfo";
import RequestFromSexWorkerBottomComponent from "./DateRequestComponents/RequestFromSexWorkerBottomComponent";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db, auth } from "../../Firebase/firebase";

const RequestFromSexWorker = () => {
  let history = useHistory();
  let { id } = useParams();
  const [requests, setRequests] = useState([]);
  const currentUser = auth.currentUser;

  const getRequests = async () => {
    const q = query(collection(db, "request"), where("receiver", "==", id));
    onSnapshot(q, (querySnapshot) => {
      setRequests(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  console.log(requests);

  let handelNext = (id) => {
    history.push(`/date-confirm-profile/${id}`);
  };

  useEffect(() => {
    getRequests();
  }, []);
  return (
    <div
      style={{
        height: "calc(100vh - 115px)",
        display: "flex",
        width: "100%",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <div style={{ position: "absolute", top: "20px" }}>
        <img src={vibesLogo} alt="vibes logo" style={{ width: "100px" }} />
      </div>
      <div style={{ position: "absolute", top: "80px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "16px", color: "#707070" }}>Date</p>
        </div>
      </div>

      <div style={{ marginTop: "140px" }}>
        {requests?.map(({ id, data }, index) => (
          <div onClick={() => handelNext(id)}>
            <ChatScreenTopInfo
              date={`${data.date} at ${data.time} for ${data.hours}`}
              rate={data.rate}
              confirmed
              dateStatus="Date: Confirmed"
              datePayment="Payment: wait of transaction"
              // onClick={handelNext}
            />
            <br />
          </div>
        ))}
        {/* <ChatScreenTopInfo
          waitingConfirmation
          dateStatus="Status: Waiting of your Conformation"
          datePayment="Time left: 04:30 Minutes"
        />
        <br />
        <ChatScreenTopInfo
          waitingConfirmation
          dateStatus="Status: Waiting of your Conformation"
          datePayment="Time left: 04:30 Minutes"
        />
        <br /> */}
      </div>
      <RequestFromSexWorkerBottomComponent />
    </div>
  );
};

export default RequestFromSexWorker;

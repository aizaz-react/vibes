import React, { useState } from "react";
import "./bankSection.css";

import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import backIcon from "../../../assets/images/back.svg";
import BankInput from "../Components/BankInput";
import BankButton from "../Components/BankButton";
import NavigationView from "../Components/NavigationView";
import { useHistory } from "react-router";
import { numberInputValidate } from "../../../functions/numberInput";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const BankDetails = () => {
  const [name, setName] = useState("");
  const [IBAN, setIBAN] = useState(0);
  const [BIC, setBIC] = useState(0);

  let history = useHistory();
  const bankDetails = { name, IBAN, BIC };
  let handelNext = async () => {
    let userId = sessionStorage.getItem("userId");

    try {
      const userRef = doc(db, "users", userId);

      await updateDoc(userRef, { bankDetails });
      history.push("/date-request");
    } catch (error) {
      console.log(error);
    }
  };

  let goBack = () => {
    history.goBack();
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model">
        <div className="logo-container">
          <div onClick={goBack}>
            <img
              src={backIcon}
              alt={backIcon}
              style={{ width: "13px", marginTop: "5px" }}
            />
          </div>
          <div>
            <img src={infoLog} alt={infoLog} style={{ width: "100px" }} />
          </div>
          <div onClick={() => history.push("/")}>
            <img src={closeIcon} alt={closeIcon} style={{ width: "15px" }} />
          </div>
        </div>

        {/*  title */}
        <div className="bank-title">
          <p>Vibes Id: #987153</p>
        </div>
        <div>
          <BankInput
            name="name"
            onChange={setName}
            placeholder="Name / Surname"
          />
        </div>
        <div>
          <BankInput
            onChange={setIBAN}
            onKeyPress={numberInputValidate}
            name="IBAN"
            maxLength={"16"}
            placeholder="IBAN________________________________________________"
          />
        </div>
        <div>
          <BankInput
            onChange={setBIC}
            name="BIC"
            placeholder="BIC________________________________________________"
          />
        </div>

        {/* message section */}

        <div className="message-section">
          <p>Without Address, We Only Make Transaction Until 250,000&euro; </p>
        </div>

        {/* button section */}

        <div>
          <BankButton title="Add Address" background="#F2F2F2" />
        </div>
        <div>
          <BankButton
            title="Save Bank Details"
            onClick={handelNext}
            background="#F2F2F2"
          />
        </div>
        <div>
          <NavigationView active="4" />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;

import React from "react";
import "./bankSection.css";

import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import backIcon from "../../../assets/images/back.svg";
import BankInput from "../Components/BankInput";
import BankButton from "../Components/BankButton";
import NavigationView from "../Components/NavigationView";
import { useHistory } from "react-router";

const BankDetails = () => {
  let history = useHistory();

  let handelNext = () => {
    history.push("/date-request");
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model">
        {/* logo container */}

        <div className="logo-container">
          <div>
            <img
              src={backIcon}
              alt="Close Icon"
              style={{ width: "13px", marginTop: "5px" }}
            />
          </div>
          <div>
            <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
          </div>
          <div>
            <img src={closeIcon} alt="Close Icon" style={{ width: "15px" }} />
          </div>
        </div>

        {/*  title */}
        <div className="bank-title">
          <p>Vibes Id: #987153</p>
        </div>
        {/* input fields section */}
        <div>
          <BankInput placeholder="Name / Surname" />
        </div>
        <div>
          <BankInput placeholder="IBAN________________________________________________" />
        </div>
        <div>
          <BankInput placeholder="BIC________________________________________________" />
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

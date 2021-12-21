import React from "react";
import LogoSection from "../OfferingProfileSection/Components/LogoSection";
import qrCode from "../../assets/images/qrCode.svg";
import OrLine from "../OfferingProfileSection/Components/OrLine";
import BankInput from "../OfferingProfileSection/Components/BankInput";
import { useHistory } from "react-router";

const QrScannerFromSexWorker = () => {
  let history = useHistory();
  let handelNext = () => {
    history.push("/date-confirm-profile");
  };

  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px", height: "100vh" }}
    >
      <div className="bank-model">
        <LogoSection hideBack={true} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          <p style={{ fontSize: "1.6rem", fontWeight: "bold", color: "gray" }}>
            QR Scanner
          </p>
        </div>
        <div
          style={{
            display: "flex",
            height: "30vh",
            background: "#F1F1F1",
            borderRadius: "25px",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
          onClick={handelNext}
        >
          <img
            src={qrCode}
            alt="qrCode"
            style={{ width: "100%", height: "inherit" }}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <OrLine />
        </div>
        <div style={{ marginTop: "15px" }}>
          <p style={{ fontSize: "1.6rem", color: "gray", fontWeight: "500" }}>
            Enter{" "}
            <span style={{ color: "#577954", fontWeight: "bold" }}>
              Vibes ID
            </span>
            :
          </p>
        </div>
        <BankInput placeholder="#987654" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100px",
              height: "13px",
              borderRadius: "10px",
              background: "577954",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QrScannerFromSexWorker;

import React, { useState, useEffect } from "react";
import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import NavigationView from "../Components/NavigationView";
import ButtonWithInfo from "../Components/ButtonWithInfo";
import BankButton from "../Components/BankButton";
import { useHistory } from "react-router";
import NewInfoButton from "../Components/NewInfoButton";

const ConfirmYou = () => {
  const [confirmValue, setConfirmValue] = useState([]);
  const [checkConfirm, setCheckConfirm] = useState(false);

  useEffect(() => {
    if (checkConfirm) {
      setTimeout(() => {
        setCheckConfirm(false);
      }, 3000);
    }
  }, [checkConfirm]);

  let history = useHistory();
  let handelClick = (e) => {
    let cValue = [...confirmValue];
    if (cValue.includes(e)) {
      let newValue = cValue.filter((item) => item !== e);
      setConfirmValue(newValue);
    } else {
      cValue.push(e);
      setConfirmValue(cValue);
    }
  };

  let handelConfirm = () => {
    if (confirmValue.length === 4) {
      history.push("/confirm-experience");
    } else {
      setCheckConfirm(true);
    }
  };
  let handelClose = () => {
    history.push("/");
  };

  return (
    <div className="div-background" style={{ height: "100vh" }}>
      <div className="bank-model">
        <div className="logo-container">
          <div></div>
          <div>
            <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
          </div>
          <div onClick={handelClose}>
            <img src={closeIcon} alt="Close Icon" style={{ width: "15px" }} />
          </div>
        </div>

        <div className="confirm-head-line">
          <p>I confirm that I'm:</p>
        </div>
        {/* recording frame */}
        <div style={{ marginTop: "2rem" }}>
          <NewInfoButton
            title="Over 18"
            check={checkConfirm}
            list={confirmValue}
            onButtonClick={() => handelClick("Over 18")}
          />
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <NewInfoButton
            title="Own Decision"
            check={checkConfirm}
            list={confirmValue}
            onButtonClick={() => handelClick("Own Decision")}
          />
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <NewInfoButton
            title="Confirm The Rules"
            check={checkConfirm}
            list={confirmValue}
            onButtonClick={() => handelClick("Confirm The Rules")}
          />
        </div>
        <div style={{ marginTop: "2.5rem" }}>
          <NewInfoButton
            title="Legal Registration"
            check={checkConfirm}
            list={confirmValue}
            onButtonClick={() => handelClick("Legal Registration")}
          />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <BankButton
            title="Confirm"
            onClick={handelConfirm}
            background="#F2F2F2"
          />
        </div>

        <div>
          <NavigationView active="1" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmYou;

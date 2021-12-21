import React, { useState } from "react";
import "./lookingOfferingButtonGroup.css";
import orIcon from "../../../assets/images/orOrange.svg";

import { useHistory } from "react-router";

const LookingOfferingButtonGroup = (props) => {
  let history = useHistory();

  const [selectedWorkerList, setSelectedWorkerList] = useState([
    "Looking",
    "Offering",
  ]);

  let handelOffering = () => {
    history.push("/confirm");
  };

  let handelGenderClick = (e) => {
    let workerList = [...selectedWorkerList];

    if (selectedWorkerList.includes(e)) {
      const filteredWorker = workerList.filter((item) => item !== e);
      setSelectedWorkerList(filteredWorker);
    } else {
      workerList.push(e);
      setSelectedWorkerList(workerList);
    }
  };

  return (
    <div
      className="looking-button-group-container"
      style={{ width: props.width }}
    >
      <div className="looking-group">
        <div
          className={`looking-section  ${
            selectedWorkerList.includes("Looking") ? "selected-looking" : ""
          }`}
        >
          <p>Looking</p>
        </div>

        <div
          className={`offering-section ${
            selectedWorkerList.includes("Offering") ? "selected-offering" : ""
          }`}
          onClick={handelOffering}
        >
          <p>Offering</p>
        </div>

        <div className="or-container">
          <div className="or-line" style={{ background: "#D99E7E" }}>
            <div
              className="inside-or-line"
              style={{ background: "white" }}
            ></div>

            <div className="or-circle-orange">
              <img src={orIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingOfferingButtonGroup;

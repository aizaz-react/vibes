import React, { useState } from "react";
import "./escortButtonGroup.css";
import plusIcon from "../../../assets/images/plusIcon.svg";
import orIcon from "../../../assets/images/orIcon.svg";
import { useSelector } from "react-redux";

import { Language } from "../../../config/TitleConfig";

const EscortButtonGroup = (props) => {
  const [selectedWorkerList, setSelectedWorkerList] = useState([]);
  const language = useSelector((state) => state.languageData.language);

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
      className="escort-button-group-container"
      style={{ width: props.width }}
    >
      <div className="escort-group">
        <div
          className={`sexworker-section  ${
            selectedWorkerList.includes(Language[language].sex_worker)
              ? "selected-sexworker"
              : ""
          }`}
          onClick={() => handelGenderClick(Language[language].sex_worker)}
        >
          <p>{Language[language].sex_worker}</p>
        </div>

        <div
          className={`escort-section ${
            selectedWorkerList.includes(Language[language].escort)
              ? "selected-escort"
              : ""
          }`}
          onClick={() => handelGenderClick(Language[language].escort)}
        >
          <p>{Language[language].escort}</p>
        </div>

        <div className="or-container">
          <div className="or-line">
            <div className="inside-or-line"></div>

            <div className="or-circle">
              <img
                src={
                  selectedWorkerList.includes(Language[language].escort) &&
                  selectedWorkerList.includes(Language[language].sex_worker)
                    ? plusIcon
                    : orIcon
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EscortButtonGroup;

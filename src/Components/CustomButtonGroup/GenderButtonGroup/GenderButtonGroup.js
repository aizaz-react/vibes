import React, { useState } from "react";
import "./genderButtonGroup.css";
import plusIcon from "../../../assets/images/plusIcon.svg";
import orIcon from "../../../assets/images/orIcon.svg";
import { Language } from "../../../config/TitleConfig";

import { useSelector } from "react-redux";

const GenderButtonGroup = (props) => {
  const [selectedGenderList, setSelectedGenderList] = useState([]);
  const language = useSelector((state) => state.languageData.language);

  let handelGenderClick = (e) => {
    let genderList = [...selectedGenderList];

    if (genderList.includes(e)) {
      const filteredGender = genderList.filter((item) => item !== e);
      setSelectedGenderList(filteredGender);
    } else {
      genderList.push(e);
      setSelectedGenderList(genderList);
    }
  };

  return (
    <div className="button-group-container" style={{ width: props.width }}>
      <div className="gender-group">
        <div
          className={`female-section ${
            selectedGenderList.includes(
              Language[language].genderButtonGroup.female
            )
              ? "selected-gender"
              : ""
          }`}
          onClick={() =>
            handelGenderClick(Language[language].genderButtonGroup.female)
          }
        >
          <p>{Language[language].genderButtonGroup.female}</p>
        </div>
        <div
          className={`male-section  ${
            selectedGenderList.includes(
              Language[language].genderButtonGroup.male
            )
              ? "selected-gender"
              : ""
          }`}
          onClick={() =>
            handelGenderClick(Language[language].genderButtonGroup.male)
          }
        >
          <p>{Language[language].genderButtonGroup.male}</p>
        </div>
        <div
          className={`divers-section  ${
            selectedGenderList.includes(
              Language[language].genderButtonGroup.divers
            )
              ? "selected-gender"
              : ""
          }`}
          onClick={() =>
            handelGenderClick(Language[language].genderButtonGroup.divers)
          }
        >
          <p>{Language[language].genderButtonGroup.divers}</p>
        </div>
        <div className="or-container">
          <div className="or-line">
            <div className="inside-or-line"></div>
            <div className="or-circle">
              <img
                src={
                  selectedGenderList.includes(
                    Language[language].genderButtonGroup.female
                  ) &&
                  selectedGenderList.includes(
                    Language[language].genderButtonGroup.male
                  )
                    ? plusIcon
                    : orIcon
                }
              />
            </div>
          </div>
          <div className="or-line">
            <div className="inside-or-line"></div>
            <div className="or-circle">
              <div className="or-circle">
                <img
                  src={
                    selectedGenderList.includes(
                      Language[language].genderButtonGroup.divers
                    ) &&
                    selectedGenderList.includes(
                      Language[language].genderButtonGroup.male
                    )
                      ? plusIcon
                      : orIcon
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderButtonGroup;

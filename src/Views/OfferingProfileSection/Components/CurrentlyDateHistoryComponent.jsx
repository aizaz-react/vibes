import React from "react";

const CurrentlyDateHistoryComponent = ({ date, nameId, amount }) => {
  return (
    <div className="date-history-comp-container">
      <div className="id-date-name">
        <p className="date">{date}</p>
        <p className="divider">-</p>
        <p className="nameId">{nameId}</p>
      </div>
      <div className="amount-container">
        <p>{amount} &euro;</p>
      </div>
    </div>
  );
};

export default CurrentlyDateHistoryComponent;

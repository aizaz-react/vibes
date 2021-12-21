import React from "react";

const CurrentlyDateComponent = ({
  date,
  nameId,
  amount,
  statusTitle,
  statusTag,
}) => {
  return (
    <div className="currently-date-container">
      <div className="first-line">
        <div className="date-name-id">
          <p className="date-section">{date}</p>
          <p className="name-id-section">{nameId}</p>
        </div>
        <div className="transisation-amout">
          <p
            style={{
              color: parseFloat(amount) < 0 ? "red" : "gray",
            }}
          >
            {amount} &euro;
          </p>
        </div>
      </div>

      <div className="amout-taglines">
        <p className="status-title">Status:</p>
        <p
          className="status-value"
          style={{
            color:
              statusTitle === "Ready for Date"
                ? "green"
                : statusTitle === "Date Finished"
                ? "orange"
                : "black",
          }}
        >
          {statusTitle}
        </p>
        <p className="status-divider">|</p>
        <p className="status-comment">{statusTag}</p>
      </div>
    </div>
  );
};

export default CurrentlyDateComponent;

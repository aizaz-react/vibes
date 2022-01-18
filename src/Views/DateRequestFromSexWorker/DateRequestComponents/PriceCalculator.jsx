import React from "react";

const PriceCalculator = ({ rate, hours, specialRequest }) => {
  let hour = hours.split(" ");
  return (
    <div style={{ marginTop: "20px" }}>
      <p
        style={{
          color: "gray",
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "5px",
        }}
      >
        Price:
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <p style={{ color: "gray", fontSize: "1.3rem", fontWeight: "500" }}>
          {`Basic - ${rate}$ X ${hours}`}
        </p>
        <p style={{ color: "gray", fontSize: "1.3rem", fontWeight: "500" }}>
          {rate * hour[0]}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <p style={{ color: "gray", fontSize: "1.3rem", fontWeight: "500" }}>
          Special Request
        </p>
        <p style={{ color: "gray", fontSize: "1.3rem", fontWeight: "500" }}>
          {`+ ${specialRequest}$`}
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "gray", fontSize: "1.5rem", fontWeight: "bold" }}>
          Total Amount
        </p>
        <p style={{ color: "gray", fontSize: "1.5rem", fontWeight: "bold" }}>
          {`${rate * hour[0] + specialRequest}$`}
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;

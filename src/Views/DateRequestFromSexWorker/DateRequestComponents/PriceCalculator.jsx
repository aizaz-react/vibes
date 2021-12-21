import React from "react";

const PriceCalculator = () => {
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
          Basic - 50$ X 2 hours
        </p>
        <p style={{ color: "gray", fontSize: "1.3rem", fontWeight: "500" }}>
          100$
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
          + 100$
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "gray", fontSize: "1.5rem", fontWeight: "bold" }}>
          Total Amount
        </p>
        <p style={{ color: "gray", fontSize: "1.5rem", fontWeight: "bold" }}>
          200$
        </p>
      </div>
    </div>
  );
};

export default PriceCalculator;

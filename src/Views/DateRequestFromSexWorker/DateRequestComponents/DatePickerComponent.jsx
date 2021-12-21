import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState("");
  let handleReactDatetimeChange = (c, e) => {
    console.log(c);
    console.log(e);
  };

  return (
    <div>
      <Calendar />
    </div>
  );
};

export default DatePickerComponent;

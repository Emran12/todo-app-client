import React, { useState } from "react";
import CalendarComponent from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-center items-center ">
      <CalendarComponent onChange={onChange} value={value} />
    </div>
  );
};

export default Calendar;

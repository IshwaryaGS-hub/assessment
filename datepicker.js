import { useState } from "react";
import useRecurrenceStore from "../hooks/useRecurrenceStore";

const DatePicker = () => {
  const { startDate, endDate, updateRecurrence } = useRecurrenceStore();

  const handleStartDateChange = (e) => {
    updateRecurrence({ startDate: new Date(e.target.value) });
  };

  const handleEndDateChange = (e) => {
    updateRecurrence({ endDate: new Date(e.target.value) });
  };

  return (
    <div>
      <input type="date" onChange={handleStartDateChange} />
      <input type="date" onChange={handleEndDateChange} />
    </div>
  );
};

export default DatePicker;

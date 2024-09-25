import { useEffect } from "react";
import useRecurrenceStore from "../hooks/useRecurrenceStore";

const RecurrenceOptions = () => {
  const { recurrencePattern, frequency, updateRecurrence } =
    useRecurrenceStore();

  const handlePatternChange = (e) => {
    updateRecurrence({ recurrencePattern: e.target.value });
  };

  const handleFrequencyChange = (e) => {
    updateRecurrence({ frequency: e.target.value });
  };

  return (
    <div>
      <select value={recurrencePattern} onChange={handlePatternChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
      <input
        type="number"
        value={frequency}
        onChange={handleFrequencyChange}
        min="1"
      />
    </div>
  );
};

export default RecurrenceOptions;

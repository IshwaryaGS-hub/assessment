import { useEffect, useState } from "react";
import useRecurrenceStore from "../hooks/useRecurrenceStore";
import { format, addDays, addWeeks, addMonths, addYears } from "date-fns";

const CalendarPreview = () => {
  const { startDate, endDate, recurrencePattern, frequency } =
    useRecurrenceStore();
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const generatedDates = [];
    let date = new Date(startDate);

    while (!endDate || date <= endDate) {
      generatedDates.push(format(date, "yyyy-MM-dd"));

      switch (recurrencePattern) {
        case "daily":
          date = addDays(date, frequency);
          break;
        case "weekly":
          date = addWeeks(date, frequency);
          break;
        case "monthly":
          date = addMonths(date, frequency);
          break;
        case "yearly":
          date = addYears(date, frequency);
          break;
        default:
          break;
      }
    }
    setDates(generatedDates);
  }, [startDate, endDate, recurrencePattern, frequency]);

  return (
    <div>
      <h2>Selected Dates:</h2>
      <ul>
        {dates.map((date) => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;

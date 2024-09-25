import DatePicker from "../components/DatePicker";
import RecurrenceOptions from "../components/RecurrenceOptions";
import CalendarPreview from "../components/CalendarPreview";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl">Recurring Date Picker</h1>
      <DatePicker />
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
}

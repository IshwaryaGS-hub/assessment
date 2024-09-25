// /__tests__/RecurrenceOptions.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import RecurrenceOptions from "../components/RecurrenceOptions";
import { create } from "zustand";

const useStore = create((set) => ({
  recurrencePattern: "daily",
  frequency: 1,
  updateRecurrence: jest.fn((updates) =>
    set((state) => ({ ...state, ...updates }))
  ),
}));

test("changes recurrence pattern", () => {
  render(<RecurrenceOptions store={useStore} />);

  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "weekly" },
  });

  expect(useStore.getState().updateRecurrence).toHaveBeenCalledWith({
    recurrencePattern: "weekly",
  });
});

import create from "zustand";

const useRecurrenceStore = create((set) => ({
  startDate: new Date(),
  endDate: null,
  recurrencePattern: "daily",
  frequency: 1,
  specificDays: [],
  updateRecurrence: (updates) => set((state) => ({ ...state, ...updates })),
}));

export default useRecurrenceStore;

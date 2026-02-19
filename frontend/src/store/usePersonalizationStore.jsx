import { create } from "zustand";

export const usePersonalizationStore = create((set) => ({
  personalization: {},
  setPersonalization: (value) =>
    set({
      personalization: value,
    }),
}));

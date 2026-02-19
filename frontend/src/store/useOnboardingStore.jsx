import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOnboardingStore = create(
  persist(
    (set) => ({
      step: 1,
      totalStep: 5,
      formData: {},
      isOverlay: false,

      setOverlay: () => set((state) => ({ isOverlay: !state.isOverlay })),

      setMinStep: () => set({ step: 1 }),
      setMaxStep: () => set((state) => ({ step: state.totalStep })),

      nextStep: () =>
        set((state) => {
          if (state.step < state.totalStep) {
            return { step: state.step + 1 };
          }
          return { step: state.totalStep };
        }),

      backStep: () =>
        set((state) => {
          if (state.step !== 1) {
            return { step: state.step - 1 };
          }
          return { step: 1 };
        }),

      setFormData: (category, newForm) =>
        set((state) => ({
          formData: {
            ...state.formData,
            [category]: {
              ...state.formData[category],
              ...newForm,
            },
          },
        })),

      reset: () =>
        set({
          step: 1,
          formData: {},
          isOverlay: false,
        }),
    }),
    {
      name: "onboarding-storage",
    },
  ),
);

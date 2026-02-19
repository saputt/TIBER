import { create } from "zustand";

export const useActivityStore = create((set) => ({
  isCalenderMonth: false,
  isCatatanOpen: false,

  setCalenderMonth: () => {
    set((state) => ({
      isCalenderMonth: !state.isCalenderMonth,
    }));
  },

  setCatatan: () => {
    set((state) => ({
      isCatatanOpen: !state.isCatatanOpen,
    }));
  },

}));

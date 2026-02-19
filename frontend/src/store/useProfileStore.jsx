import { create } from "zustand";

export const useProfileStore = create((set) => ({
  isDurationOpen: false,
  isDailyOpen: false,
  isControlOpen: false,
  isStartDateOpen: false,
  personalization: {},
  isFullNameOpen: false,
  isChangePasswordOpen: false,

  setPersonalization: (data) => {
    set((state) => ({
      personalization: {
        ...state.personalization,
        ...data,
      },
    }));
  },

  setDuration: () => {
    set((state) => ({
      isDurationOpen: !state.isDurationOpen,
    }));
  },

  setStartDate: () => {
    set((state) => ({
      isStartDateOpen: !state.isStartDateOpen,
    }));
  },

  setDaily: () => {
    set((state) => ({
      isDailyOpen: !state.isDailyOpen,
    }));
  },

  setControl: () => {
    set((state) => ({
      isControlOpen: !state.isControlOpen,
    }));
  },

  setFullName: () => {
    set((state) => ({
      isFullNameOpen: !state.isFullNameOpen,
    }))
  },

  setChangePassword: () => {
    set((state) => ({
      isChangePasswordOpen: !state.isChangePasswordOpen,
    }))
  },

}));

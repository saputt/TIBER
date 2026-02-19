import { create } from "zustand";

export const useLandingStore = create((set) => ({
    isHamburgerOpen: false,

    setHamburger: () => {
        set((state) => ({
            isHamburgerOpen: !state.isHamburgerOpen
        }))
    }

}));
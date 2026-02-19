import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      //state
      user: null,
      token: null,
      isLogin: false,

      //function for set data login to state
      setAuth: (userData, token) => {
        set({ user: userData, token, isLogin: true });
      },

      //function for set data profile to state
      setUser: (userData) => {
        set((state) => ({ user: { ...state.user, fullname: userData.full_name } }));
      },

      //function for remove data login from state
      logout: () => {
        set({ user: null, token: null, isLogin: false });
      },
    }),
    //for save state to local storage
    {
      name: "auth-store",
    },
  ),
);

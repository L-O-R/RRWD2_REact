import { create } from "zustand";

export const useAppStore = create((set, get) => ({
  user: null,
  isLoggedIn: false,
  isLoggedOut: false,

  login: (userData) => {
    set({ user: userData, isLoggedIn: true });
  },

  checkStatus: () => {
    const { isLoggedIn } = get();
    console.log(`Current Login Status: ${isLoggedIn}`);
  },
}));

import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("weather-theme") || "dark",
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === "dark" ? "light" : "dark";
    localStorage.setItem("weather-theme", newTheme);
    return { theme: newTheme };
  }),
}));

export default useThemeStore;
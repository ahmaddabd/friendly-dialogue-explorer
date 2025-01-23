import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      isLoading: false,
      setLoading: (loading) => set({ isLoading: loading }),
      language: 'ar',
      setLanguage: (lang) => set({ language: lang }),
      theme: 'light',
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'app-store',
    }
  )
);
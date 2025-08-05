import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}


import { createContext, Dispatch, SetStateAction } from "react";

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export enum Theme {
  LIGHT = 'light-theme',
  DARK = 'dark-theme',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({})

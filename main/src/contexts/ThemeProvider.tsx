import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

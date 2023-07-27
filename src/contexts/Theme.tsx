import React, { createContext, useState } from "react";
import { DarkModeContextValue, initialContextValue } from "./types/theme";
const DarkModeContext = createContext<DarkModeContextValue>(initialContextValue);
export const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [theme, setTheme] = useState("light");
    const switchTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
      };
    
     
  const value: DarkModeContextValue = {
    theme,
    setTheme,
    switchTheme
  };
 
  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export default DarkModeContext;
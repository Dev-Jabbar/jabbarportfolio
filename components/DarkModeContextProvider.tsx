import React, { ReactNode, createContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface DarkModeContextType {
  theme: string | undefined;
  setTheme: (theme: string | undefined) => void;
  systemTheme: string | undefined;
  mounted: boolean;
  setMounted: (mounted: boolean) => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  theme: "",
  setTheme: () => {},
  systemTheme: "",
  mounted: false,
  setMounted: () => {},
});

type Props = { children: ReactNode };

const DarkModeContextProvider = ({ children }: Props) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSetTheme = (newTheme: string | undefined) => {
    if (newTheme !== undefined) {
      setTheme(newTheme);
    }
  };

  return (
    <DarkModeContext.Provider
      value={{
        theme,
        setTheme: handleSetTheme,
        systemTheme,
        mounted,
        setMounted,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;

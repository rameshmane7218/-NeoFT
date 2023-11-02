"use client";

import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { PaletteMode, useMediaQuery } from "@mui/material";
import getDesignTokens from "./theme";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "",
});

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // const getThemeMode = (): PaletteMode | undefined => {
  //   if (typeof window !== "undefined") {
  //     const mode = localStorage?.getItem("mui-theme-mode");
  //     return mode == "dark" ? "dark" : "light";
  //   }
  // };
  // const setThemeMode = (value: PaletteMode): void => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("mui-theme-mode", value);
  //   }
  // };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState<PaletteMode>(
    prefersDarkMode ? "dark" : "light"
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => {
          const mode = prevMode === "light" ? "dark" : "light";
          return mode;
        });
        // setThemeMode(mode);
      },
    }),
    [mode]
  );

  // React.useEffect(() => {
  //   setThemeMode(mode);
  // }, [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ColorModeContext.Provider value={{ ...colorMode, mode: mode }}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}

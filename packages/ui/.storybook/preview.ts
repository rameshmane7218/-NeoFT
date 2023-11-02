// .storybook/preview.js
import * as React from "react";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { theme } from "../src/ThemeRegistry";
import getDesignTokens from "../src/ThemeRegistry/theme";

// Update the theme only if the mode changes
const lightTheme = createTheme(getDesignTokens("light"));
const darkTheme = createTheme(getDesignTokens("dark"));

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  expanded: true,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // background: {

  // },
};

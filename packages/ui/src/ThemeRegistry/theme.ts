"use client";

import { Inter } from "next/font/google";

import {
  PaletteColorOptions,
  ThemeOptions,
  createTheme,
} from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { useMemo } from "react";
import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

const inter = Inter({ subsets: ["latin"] });

export interface ThemeOptionsTypes extends ThemeOptions {
  palette: ThemeOptions["palette"] & {
    [k: string]: any;
    // primaryUI: PaletteColorOptions;
    // greyUI: PaletteColorOptions & {
    //   10?: string | undefined;
    // };
  };
  typography: ThemeOptions["typography"] & {
    [k: string]: any;
    // button_16: TypographyStyleOptions | undefined;
    // textBold_16: TypographyStyleOptions | undefined;
    // textRegular_16: TypographyStyleOptions | undefined;
    // textLight_16: TypographyStyleOptions | undefined;
    // textBold_14: TypographyStyleOptions | undefined;
    // textRegular_14: TypographyStyleOptions | undefined;
    // textLight_14: TypographyStyleOptions | undefined;
    // textBold_12: TypographyStyleOptions | undefined;
    // textMedium_12: TypographyStyleOptions | undefined;
    // textRegular_12: TypographyStyleOptions | undefined;
  };
}

const getDesignTokens = (mode: PaletteMode): ThemeOptionsTypes => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primaryUI: {
            main: "rgb(208, 102, 100)",
            dark: "rgb(208, 102, 100)",
            light: "rgb(208, 102, 100)",
          },
          secondaryPink: {},
          greyUI: {
            main: "#EBF0F0",
            50: "rgba(235, 240, 240, 0.50)",
            10: "rgba(235, 240, 240, 0.10)",
          },
          heading: "#000000",
          button: "#5D5D5B",
          buttonPrimary: "#000000",
        }
      : {
          // palette values for dark mode
          primaryUI: {
            main: "rgb(208, 102, 100)",
            dark: "rgb(208, 102, 100)",
            light: "rgb(208, 102, 100)",
          },
          secondaryPink: {},
          greyUI: {
            main: "#EBF0F0",
            50: "rgba(235, 240, 240, 0.50)",
            10: "rgba(235, 240, 240, 0.10)",
          },
          heading: "#000000",
          button: "#5D5D5B",
          buttonPrimary: "#000000",
          background: {
            default: "#000000",
            paper: "#222222",
          },
        }),
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "42px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    h2: {
      fontSize: "32px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    h3: {
      fontSize: "28px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    h4: {
      fontSize: "24px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    h5: {
      fontSize: "20px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 800,
      lineHeight: "normal",
    },
    button: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
      textTransform: "none",
    },
    button_16: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    textBold_16: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    textRegular_16: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    textLight_16: {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
    },
    textBold_14: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "21px",
    },
    textRegular_14: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "21px",
    },
    textLight_14: {
      fontSize: "14px",
      fontWeight: 300,
      lineHeight: "21px",
    },
    textBold_12: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "18px",
    },
    textMedium_12: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "18px",
    },
  },
  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       root: ({ ownerState }) => ({
  //         ...(ownerState.severity === "info" && {
  //           backgroundColor: "#60a5fa",
  //         }),
  //       }),
  //     },
  //   },
  // },
});

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primaryUI: {
//       main: "rgb(208, 102, 100)",
//       dark: "rgb(208, 102, 100)",
//       light: "rgb(208, 102, 100)",
//     },
//     secondaryPink: {},
//     greyUI: {
//       main: "#EBF0F0",
//       50: "rgba(235, 240, 240, 0.50)",
//       10: "rgba(235, 240, 240, 0.10)",
//     },
//     heading: "#000000",
//     button: "#5D5D5B",
//     buttonPrimary: "#000000",
//   },
// } as ThemeOptionsTypes);

// Update the theme only if the mode changes

export default getDesignTokens;

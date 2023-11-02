"use client";
import * as React from "react";
import { styled } from "@mui/material";
import MaterialUIButton, { ButtonProps } from "@mui/material/Button";
import { designSystem } from "../ThemeRegistry/design-system";

const ColorButton = styled(MaterialUIButton)<ButtonProps>(({
  theme,
  variant,
}) => {
  switch (variant) {
    case "outlined": {
      return {
        textTransform: "none",
        boxShadow: "none",
        color:
          theme.palette.mode == "light"
            ? designSystem.colors.black.main
            : designSystem.colors.white,
        backgroundColor: "transparent",
        borderRadius: "23px",
        border: "1px solid",
        borderColor:
          theme.palette.mode == "light"
            ? designSystem.colors.outline.main
            : designSystem.colors.outline[150],
        padding: "12px 31px",
        "&:hover": {
          boxShadow: "none",
          color: designSystem.colors.primary.main,
          backgroundColor: "transparent",
          borderColor:
            theme.palette.mode == "light"
              ? designSystem.colors.outline.main
              : designSystem.colors.outline[150],
        },
        "&:active": {
          boxShadow: "none",
          color: designSystem.colors.primary.main,
          backgroundColor: "transparent",
          borderColor:
            theme.palette.mode == "light"
              ? designSystem.colors.outline.main
              : designSystem.colors.outline[150],
        },
      };
    }
    case "text": {
      return {
        textTransform: "none",
        boxShadow: "none",

        color: theme.palette.mode == "light" ? "#000000" : "#ffffff",
        backgroundColor: "transparent",
        borderRadius: "23px",
        padding: "12px 31px",
        "&:hover": {
          boxShadow: "none",
          color: designSystem.colors.primary.main,
          backgroundColor: "transparent",
        },
        "&:active": {
          boxShadow: "none",
          color: designSystem.colors.primary.main,
          backgroundColor: "transparent",
        },
      };
    }
    default: {
      return {
        boxShadow: "none",
        color:
          theme.palette.mode == "light"
            ? designSystem.colors.primary.main
            : designSystem.colors.white,
        backgroundColor:
          theme.palette.mode == "light"
            ? designSystem.colors.primary.light
            : designSystem.colors.grey[100],
        borderRadius: "23px",
        padding: "12px 31px",
        "&:hover": {
          boxShadow: "none",
          color:
            theme.palette.mode == "light"
              ? designSystem.colors.white
              : designSystem.colors.primary.main,
          backgroundColor:
            theme.palette.mode == "light"
              ? designSystem.colors.primary.main
              : "#EBF0F01A",
        },
        "&:active": {
          boxShadow: "none",
          color:
            theme.palette.mode == "light"
              ? designSystem.colors.white
              : designSystem.colors.primary.main,
          backgroundColor: designSystem.colors.primary.main,
        },
      };
    }
  }
});

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <ColorButton {...rest}>{children}</ColorButton>;
};

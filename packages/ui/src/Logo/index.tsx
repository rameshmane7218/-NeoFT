import { Stack } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import logo from "../assets/logo.png";
import { designSystem } from "../ThemeRegistry/design-system";
interface Props {
  children?: ReactNode;
}

export const Logo = ({}: Props) => {
  return (
    <Stack
      borderRadius={"100%"}
      height={"40px"}
      width={"40px"}
      bgcolor={designSystem.colors.primary.main}
      sx={{
        position: "relative",
      }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        src={logo}
        objectFit="contain"
        alt="Logo"
        style={{
          position: "absolute",
          margin: "auto",
        }}
      ></Image>
    </Stack>
  );
};

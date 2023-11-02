"use client";
import { Box, Container, Stack } from "@mui/material";
import { useContext } from "react";
import { Logo } from "../Logo";
import Link from "next/link";
import { designSystem } from "../ThemeRegistry/design-system";
import { Button } from "../Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { ColorModeContext } from "../ThemeRegistry/ThemeRegistry";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const pathname = usePathname();
  const links = [
    {
      label: "Explore",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Launchpad",
      href: "#",
    },
  ];
  console.log("pathname", pathname);
  return (
    <Box
      component={"header"}
      boxShadow={
        mode == "dark"
          ? "0px 3px 4px 0px rgba(255, 255, 255, 0.25)"
          : designSystem.shadowPrimary[4]
      }
      sx={{
        background: mode == "dark" ? "#000000" : "#FFFFFF",
      }}
    >
      <Container maxWidth="xl" sx={{ padding: "20px 0px 24px" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"}>
            <Link href={"/"}>
              <Logo />
            </Link>
          </Stack>

          <Stack direction={"row"} alignItems={"center"}>
            <Stack direction={"row"} gap={"29px"} alignItems={"center"}>
              {links.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    style={{
                      ...designSystem.typography.button_16,
                      color:
                        pathname == item.href
                          ? mode == "dark"
                            ? "white"
                            : "black"
                          : mode == "dark"
                          ? designSystem.colors.grey[500]
                          : designSystem.colors.grey.dark,
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Stack direction={"row"} alignItems={"center"} gap={"25px"}>
                <Button
                  variant="outlined"
                  sx={{
                    padding: "4px",
                    minWidth: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // color: "white",
                  }}
                  onClick={() => {
                    toggleColorMode();
                  }}
                >
                  {mode == "dark" ? (
                    <WbSunnyOutlinedIcon
                      sx={{
                        height: "18px",
                        width: "18px",
                      }}
                    />
                  ) : (
                    <DarkModeOutlinedIcon
                      sx={{
                        height: "18px",
                        width: "18px",
                      }}
                    />
                  )}
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: designSystem.colors.primary.main,
                    color: designSystem.colors.white,
                  }}
                >
                  Connect Wallet
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

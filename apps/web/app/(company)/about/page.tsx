"use client";
// import { Metadata } from "next";
import React from "react";
import { Container, Typography } from "ui";

// export const metadata: Metadata = {
//   title:
//     "About Us | A highly-curated platform for creating, collecting unique NFTs",
// };

export default function about(): JSX.Element {
  return (
    <Container maxWidth="xl">
      <Typography variant="h1">About-us</Typography>
    </Container>
  );
}

"use client";
import { Box, Button, Container, Stack, Typography, Divider } from "ui";
import logo from "./logo.png";
export default function Buttons() {
  return (
    <Container maxWidth={"xl"} sx={{ paddingTop: "20px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-evenly"}
        padding={"20px 0"}
      >
        <Button variant="contained">Containe</Button>
        <Button variant="outlined">Outline</Button>
        <Button variant="text">Text</Button>
      </Stack>
      <Divider />
      <Box padding={"20px 0"}>
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
        <Typography variant="h5">Heading 5</Typography>
        <Typography variant="h6">Heading 6</Typography>
      </Box>
    </Container>
  );
}

import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Button } from "./index";
import { Box } from "@mui/material";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// Todo: Update default story
export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Variant = () => {
  return (
    <Box display={"flex"} gap={20}>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </Box>
  );
};
/*
 * More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
 */

// Todo:

/*
 * Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
// Todo:

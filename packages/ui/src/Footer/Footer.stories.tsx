import type { Meta, StoryObj } from '@storybook/react'

import { Footer } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Footer>

// Todo: Update default story
export const Default: Story = {}


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
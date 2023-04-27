import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '.'
import Icon from '../Icon'
import { text } from 'stream/consumers'

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  name: 'Large Button',
  args: {
    size: 'large',
    text: 'Large Button',
    color: 'primary'
  }
  /* render: () => (
    <Button text="Large Primary Button" size="large" color="primary" />
  ) */
}

export const SmallPrimary: Story = {
  name: 'Small Button',
  args: {
    size: 'small',
    text: <Icon name="CheckFat" />,
    color: 'primary'
  }
}

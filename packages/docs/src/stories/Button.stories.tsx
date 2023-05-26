import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Send',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Secondary: StoryObj = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj = {
  args: {
    variant: 'tertiary',
    children: 'cancel',
  },
}

export const Small: StoryObj = {
  args: {
    size: 'sm',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: 'true',
  },
}

export const WithIcon: StoryObj = {
  args: {
    children: (
      <>
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

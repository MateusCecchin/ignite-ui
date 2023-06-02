import type { Meta, StoryObj } from '@storybook/react'
import { Multistep, MultitepProps } from '@goat-ui/react'

export default {
  title: 'Form/Multistep',
  component: Multistep,
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultitepProps>

export const Primary: StoryObj = {}

export const Full: StoryObj = {
  args: {
    currentStep: 4,
  },
}

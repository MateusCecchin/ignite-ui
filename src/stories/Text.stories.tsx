import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@goat-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Example text',
  },
} as Meta<TextProps>

export const Primary: StoryObj = {}

export const CustomText: StoryObj = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

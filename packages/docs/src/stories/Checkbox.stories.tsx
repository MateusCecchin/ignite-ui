import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', gap: '$2' }}>
          {Story()}
          <Text>Accept terms</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj = {}

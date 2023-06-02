import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@goat-ui/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text>Obs</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj = {
  args: {
    placeholder: 'Add any obs',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: 'true',
  },
}

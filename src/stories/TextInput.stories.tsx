import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@goat-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text>Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj = {
  args: {
    placeholder: 'Type your name',
  },
}

export const WithPrefix: StoryObj = {
  args: {
    prefix: 'prefix',
    placeholder: 'your username',
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: 'true',
  },
}

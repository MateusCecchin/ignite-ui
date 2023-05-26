import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example heading',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj = {}

export const CustomText: StoryObj = {
  args: {
    children: 'Strong heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      descriptions: {
        story:
          'Por padrao o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade as',
      },
    },
  },
}

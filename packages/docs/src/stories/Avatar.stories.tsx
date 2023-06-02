import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@goat-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/mateuscecchin.png',
    alt: 'urubu do flamengo',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj = {}

export const WithFallback: StoryObj = {
  args: {
    src: undefined,
  },
}

import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@async-design/react'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/andrebellico.png',
    size: 'md',
    isBordered: false,
    isDisabled: false,
    isFocusable: true,
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<AvatarProps>

export const WithImage: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: '',
  },
}

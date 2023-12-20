import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@asyncui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    size: 'md',
    className: 'text-primary-600',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return Story()
    },
  ],
} as Meta<TextProps>

export const Text_: StoryObj<TextProps> = {}

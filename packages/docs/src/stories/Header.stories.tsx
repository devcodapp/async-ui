import type { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '@asyncui/react'

export default {
  title: 'Components/Header',
  component: Header,
  args: {
    title: 'Header title',
    subtitle: 'Header subtitle',
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return Story()
    },
  ],
} as Meta<HeaderProps>

export const Header_: StoryObj<HeaderProps> = {}

export const HeaderWithButton_: StoryObj<HeaderProps> = {
  args: {
    primaryActionBtn: (
      <button className="border-green-600 border border-solid rounded p-2 ">
        {' '}
        Primary
      </button>
    ),
    secondaryActionBtn: (
      <button className="border-green-600 text-[#50d71e] border border-solid rounded p-2 ">
        {' '}
        Secondary
      </button>
    ),
    tertiaryActionBtn: (
      <button className="border-green-600 border border-solid rounded p-2 ">
        {' '}
        Tertiary
      </button>
    ),
    back: (
      <button className="border-green-600 border border-solid rounded p-2 ">
        Back
      </button>
    ),
    title: 'Header title',
    subtitle: 'Header subtitle',
  },
}

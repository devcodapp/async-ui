import { AlertProps, Alert, useAlert } from '@asyncui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  args: {
    title: 'Warning alert:',
    children:
      'Alert with title and longer description Alert with title and longer description Alert with title and longer description Alert with title and longer description.',
    variant: 'warning',
    onClose: () => {},
    size: 'large',
    link: 'https://www.google.com/',
    textLink: 'Saiba Mais',
  },
  parameters: { layout: 'centered' },
} as Meta<AlertProps>

export const Alert_: StoryObj<AlertProps> = {}

export const Action = () => {
  const { alerts, createToast } = useAlert()

  const addAlert = () => {
    createToast({
      title: 'Warning alert:',
      children: 'Alert with title and longer description.',
      variant: 'success',
      onClose: () => {},
      size: 'small',
      link: 'https://www.google.com/',
      textLink: 'Saiba Mais',
    })
  }
  return (
    <button
      onClick={addAlert}
      className="bg-primary-600 border text-white px-6 py-2 rounded-md"
    >
      Adicionar Alert
      {alerts}
    </button>
  )
}

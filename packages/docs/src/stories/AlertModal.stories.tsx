import { Button, useDisclosure } from '@nextui-org/react'
import { ModalAlert } from '@asyncui/react'
import { AlertCircle } from 'lucide-react'

export default {
  title: 'Components/Modal Alert',
  component: ModalAlert,
  tags: ['autodocs'],
  args: {
    size: 'md',
    hideCloseButton: false,
    backdrop: 'opaque',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        'full',
      ],
      description: 'Tamanho do modal',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    hideCloseButton: {
      control: { type: 'boolean' },
    },
    backdrop: {
      control: { type: 'inline-radio' },
      options: ['transparent', 'opaque', 'blur'],
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export const ModalAlert_ = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <ModalAlert.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalAlert.Header>
          <p className="text-colors-neutral-1000">Confirmação</p>
        </ModalAlert.Header>
        <ModalAlert.Content>
          <AlertCircle
            className="mt-2 mb-0 self-center"
            color="#B72B1A"
            size={28}
          />
          <p className="font-semibold text-colors-danger-500 text-center m-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
            beatae?
          </p>
        </ModalAlert.Content>
        <ModalAlert.Footer>
          <button className="flex items-center gap-1 body-semi justify-center rounded px-4 py-3 bg-colors-neutral-700 text-colors-primary-600  border border-solid ">
            Botões
          </button>
        </ModalAlert.Footer>
      </ModalAlert.Root>
    </>
  )
}

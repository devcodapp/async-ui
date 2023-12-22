import {
  ModalHeader as ModalHeaderNextUI,
  ModalHeaderProps as ModalHeaderPropsNextUI,
} from '@nextui-org/react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ModalHeaderProps extends ModalHeaderPropsNextUI {
  children?: ReactNode
}

export function ModalHeader({
  className,
  children,
  ...props
}: ModalHeaderProps) {
  return (
    <ModalHeaderNextUI
      className={twMerge(
        'pt-6 border-solid border-b border-colors-neutral-200 flex justify-center pb-6',
        className,
      )}
      {...props}
    >
      {children}
    </ModalHeaderNextUI>
  )
}

import {
  ModalFooter as ModalFooterNextUI,
  ModalFooterProps as ModalFooterPropsNextUI,
} from '@nextui-org/react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ModalFooterProps extends ModalFooterPropsNextUI {
  children: ReactNode
}

export function ModalFooter({
  className,
  children,
  ...props
}: ModalFooterProps) {
  return (
    <ModalFooterNextUI
      className={twMerge(
        'justify-between border-solid border-t border-neutral-200',
        className,
      )}
      {...props}
    >
      {children}
    </ModalFooterNextUI>
  )
}

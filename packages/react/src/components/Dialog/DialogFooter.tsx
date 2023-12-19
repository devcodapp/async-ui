import {
  ModalFooter as DialogFooterNextUI,
  ModalFooterProps,
} from '@nextui-org/react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DialogFooterProps extends ModalFooterProps {
  children: ReactNode
}

export default function ModalFooter({
  className,
  children,
  ...props
}: DialogFooterProps) {
  return (
    <DialogFooterNextUI
      {...props}
      className={twMerge(
        'justify-between w-full rounded border-solid items-center pt-4 pb-4 flex border-t bg-neutral-100 border-neutral-200',
        className,
      )}
    >
      {children}
    </DialogFooterNextUI>
  )
}

import {
  ModalBody as DialogBodyNextUI,
  ModalBodyProps,
} from '@nextui-org/react'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DialogContentProps extends ModalBodyProps {
  children: ReactNode
}

export function DialogContent({
  children,
  className,
  ...props
}: DialogContentProps) {
  return (
    <DialogBodyNextUI className={twMerge('gap-3', className)} {...props}>
      {children}
    </DialogBodyNextUI>
  )
}

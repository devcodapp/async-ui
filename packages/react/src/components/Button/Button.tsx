'use client'

import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={twMerge('bg-danger-700 text-neutral-0 font-bold', className)}
      {...props}
    />
  )
}

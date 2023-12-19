import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextProps {
  children: React.ReactNode
  className?: string
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeStyles = {
  xxs: 'text-[0.7rem]',
  xs: 'text-[0.75rem]',
  sm: 'text-[0.875rem]',
  md: 'text-[1rem]',
  lg: 'text-[1.125rem]',
  xl: 'text-[2rem]',
}

export const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'md',
}) => {
  const textStyles = twMerge(
    sizeStyles[size],
    'text-neutral-700',
    'font-semi-bold',
    className,
  )

  return <span className={textStyles}>{children}</span>
}

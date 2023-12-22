import React, { ReactNode, useState, useEffect } from 'react'
import {
  CheckCircle2,
  AlertCircleIcon,
  Info,
  X,
  ExternalLink,
} from 'lucide-react'
import { Transition } from '@headlessui/react'

export interface AlertProps {
  title?: string
  variant?: 'success' | 'danger' | 'warning' | 'info'
  size?: 'small' | 'large'
  children: ReactNode
  onClose: () => void
  link?: string
  textLink?: string
}

export function Alert({
  title,
  size = 'small',
  variant = 'info',
  children,
  onClose,
  link,
  textLink,
}: AlertProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
      onClose && onClose()
    }, 5000)

    return () => clearTimeout(timeout)
  }, [onClose])

  const baseStyles =
    'p-5 rounded shadow border border-solid m-5 flex gap-3.5 items-start relative'

  const sizeStyles = {
    small: 'min-w-[31.25rem]',
    large: ' max-w-[31.25rem]',
  }

  const classVariant = {
    success: 'bg-colors-success-100 border-colors-success-200 ',
    info: 'bg-colors-primary-300 border-colors-primary-400',
    danger: 'bg-colors-danger-100 border-colors-danger-200 ',
    warning: 'bg-colors-warning-100 border-colors-warning-200 ',
  }

  return (
    <Transition
      appear
      show={visible}
      enter="transition ease-out duration-400 transform"
      enterFrom="opacity-0 translate-x-1 translate-y-0"
      enterTo="opacity-100 translate-x-0 translate-y-0"
      leave="transition ease-out duration-400 transform"
      leaveFrom="opacity-100 translate-x-1 translate-y-0"
      leaveTo="opacity-0 translate-x-2 translate-y-0"
    >
      <div
        className={`${classVariant[variant]} ${baseStyles} ${sizeStyles[size]}`}
      >
        <div className="w-4">
          {variant === 'success' ? (
            <CheckCircle2 size={16} className="text-colors-success-600" />
          ) : variant === 'danger' ? (
            <AlertCircleIcon size={16} className="text-colors-danger-600" />
          ) : variant === 'warning' ? (
            <AlertCircleIcon size={16} className="text-colors-warning-600" />
          ) : (
            <Info size={16} className="text-colors-primary-600" />
          )}
        </div>
        <div
          className={`text-sm ${sizeStyles[size]} ${
            size === 'large'
              ? 'mr-2 justify-start text-start'
              : 'flex mr-2 text-center'
          }`}
        >
          {title && (
            <p className="font-bold text-colors-neutral-800 text-sm mb-1 mr-1">
              {title}
            </p>
          )}
          {children && <p className="mr-2 text-colors-neutral-800">{children}</p>}
          {link && (
            <>
              <a
                href={link}
                className="text-colors-primary-700 flex justify-normal items-center gap-1 self-baseline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {textLink || link}
                <ExternalLink size={11} className="text-colors-primary-700" />
              </a>
            </>
          )}
        </div>
        <button
          onClick={() => {
            setVisible(false)
            onClose && onClose()
          }}
        >
          <X size={16} className="absolute right-5 text-colors-neutral-700" />
        </button>
      </div>
    </Transition>
  )
}

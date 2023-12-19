import React, { useState } from 'react'
import { Alert } from './Alert'
import { Transition } from '@headlessui/react'

type Toast = {
  children: string
  variant?: 'success' | 'danger' | 'warning' | 'info'
  size?: 'small' | 'large'
  title?: string
  onClose: () => void
  link?: string
  textLink?: string
}

export function useAlert() {
  const [list, setAlerts] = useState<Toast[]>([])

  const createToast = (options: Toast): void => {
    setAlerts([...list, options])
  }

  const closeAlert = (index: number): void => {
    setAlerts((alerts) => {
      const updatedAlerts = [...alerts]
      updatedAlerts.splice(index, 1)
      return updatedAlerts
    })
  }

  return {
    alerts: (
      <div className="absolute top-1 right-2">
        <div>
          {list.map((t, index) => (
            <Transition
              key={index}
              show={!!list[index]}
              enter="transition ease-out duration-400 transform"
              enterFrom="opacity-0 translate-x-1 translate-y-0"
              enterTo="opacity-100 translate-x-0 translate-y-0"
              leave="transition ease-out duration-400 transform"
              leaveFrom="opacity-100 translate-x-1 translate-y-0"
              leaveTo="opacity-0 translate-x-2 translate-y-0"
            >
              <Alert
                variant={t.variant}
                size={t.size}
                title={t.title}
                onClose={() => closeAlert(index)}
                link={t.link}
                textLink={t.textLink}
              >
                {t.children}
              </Alert>
            </Transition>
          ))}
        </div>
      </div>
    ),
    createToast,
  }
}

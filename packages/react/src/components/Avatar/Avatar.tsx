import {
  AvatarIcon,
  Avatar as AvatarNextUI,
  AvatarProps as AvatarPropsNextUI,
} from '@nextui-org/react'
import { twMerge } from 'tailwind-merge'

export interface AvatarProps extends AvatarPropsNextUI {
  src?: string
  size?: 'sm' | 'md' | 'lg'
  isBordered?: boolean
  isDisabled?: boolean
  isFocusable?: boolean
}

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return (
    <div>
      <AvatarNextUI
        {...props}
        icon={<AvatarIcon />}
        className={twMerge('bg-alternative-500 text-black', className)}
      />
    </div>
  )
}

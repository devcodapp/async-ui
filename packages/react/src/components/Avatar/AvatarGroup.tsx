import {
  AvatarGroup as AvatarGroupNextUI,
  AvatarGroupProps as AvatarGroupPropsNextUI,
} from '@nextui-org/react'
import { ReactNode } from 'react'

export interface AvatarGroupProps extends AvatarGroupPropsNextUI {
  max: number
  total: number
  isBordered?: boolean
  isDisabled?: boolean
  children: ReactNode
}

export const AvatarGroup = ({ children, ...props }: AvatarGroupProps) => {
  return <AvatarGroupNextUI {...props}>{children}</AvatarGroupNextUI>
}

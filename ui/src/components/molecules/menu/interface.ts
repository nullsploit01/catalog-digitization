import { ReactElement } from 'react'

export interface ICustomMenuProps {
  icon: ReactElement
  options: ICustomMenuOption[]
  onClick?: (value: string) => void
}

export interface ICustomMenuOption {
  name: string
  value: string
  icon: ReactElement
}

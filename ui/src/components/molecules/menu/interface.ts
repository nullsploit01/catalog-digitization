import { ReactElement } from 'react'

export interface ICustomMenuProps {
  title: string
  options: ICustomMenuOption[]
  onClick?: (value: string) => void
}

export interface ICustomMenuOption {
  name: string
  icon: ReactElement
}

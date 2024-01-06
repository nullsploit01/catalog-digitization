import { ReactElement } from 'react'

export interface ICustomCardProps {
  title: string
  description: string
  image?: string
  actions?: ICardActions[]
}

export interface ICardActions {
  name: string | ReactElement
  onClick?: (value: string) => void
}

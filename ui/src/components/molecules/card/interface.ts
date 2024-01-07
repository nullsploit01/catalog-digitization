import { ReactElement } from 'react'

export interface ICustomCardProps {
  content?: string | ReactElement
  image?: string
  actions?: ICardActions[]
}

export interface ICardActions {
  name: string | ReactElement
  onClick?: (value: string) => void
}

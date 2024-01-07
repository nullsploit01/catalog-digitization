import { ReactNode } from 'react'

export interface ICustomModalProps {
  open: boolean
  handleClose: () => void
  children: ReactNode
}

import { AlertColor } from '@mui/material'
import { ReactNode } from 'react'

export interface INotification {
  show: boolean
  message: string
  variant?: AlertColor
}

export interface INotificationContext {
  showNotification: (message: string, variant?: AlertColor) => void
}

export interface INotificationContextProvider {
  children: ReactNode
}

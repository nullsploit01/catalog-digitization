import CustomAlert from 'src/components/atoms/alert'

import { INotification, INotificationContext, INotificationContextProvider } from './interface'
import { AlertColor } from '@mui/material'
import { createContext, FC, useState } from 'react'

export const NotificationContext = createContext({} as INotificationContext)

export const NotificationContextProvider: FC<INotificationContextProvider> = ({ children }) => {
  const [_notification, setNotification] = useState({} as INotification)

  const showNotification = (message: string, variant: AlertColor = 'info') => {
    setNotification({ message, variant, show: true })
  }

  const hideNotification = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setNotification({ show: false, message: '' })
  }

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      <CustomAlert
        open={_notification.show}
        onClose={hideNotification}
        message={_notification.message}
        variant={_notification.variant}
      />
      {children}
    </NotificationContext.Provider>
  )
}

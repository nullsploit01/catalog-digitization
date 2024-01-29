import { NotificationContext } from 'src/providers/notification-provider'

import { useContext } from 'react'

export const useNotification = () => {
  const notificationContext = useContext(NotificationContext)

  if (!notificationContext) {
    throw new Error('Please use this hook under Notification Provider')
  }

  return notificationContext
}

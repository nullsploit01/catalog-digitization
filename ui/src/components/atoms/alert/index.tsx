import { Alert, AlertColor, Snackbar } from '@mui/material'
import { FC } from 'react'

interface ICustomAlertProps {
  message: string
  open?: boolean
  variant?: AlertColor
  onClose?: () => void
}

const CustomAlert: FC<ICustomAlertProps> = ({ variant = 'info', message, open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      <Alert severity={variant} onClose={onClose}>
        {message}
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert

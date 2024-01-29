import { Alert, AlertColor, Snackbar } from '@mui/material'
import { FC, Fragment } from 'react'

interface ICustomAlertProps {
  message: string
  open?: boolean
  variant?: AlertColor
  onClose?: () => void
}

const CustomAlert: FC<ICustomAlertProps> = ({ variant = 'info', message, open, onClose }) => {
  return (
    <Fragment>
      {open && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={open}
          autoHideDuration={3500}
          onClose={onClose}
        >
          <Alert severity={variant} onClose={onClose}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </Fragment>
  )
}

export default CustomAlert

import { Backdrop, CircularProgress, Typography } from '@mui/material'
import { FC } from 'react'

interface ICustomBackdropProps {
  open: boolean
  message?: string
}

const CustomBackdrop: FC<ICustomBackdropProps> = ({ open, message }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        display: 'flex',
        flexDirection: 'column'
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
      {message && <Typography variant="subtitle1">{message}</Typography>}
    </Backdrop>
  )
}

export default CustomBackdrop

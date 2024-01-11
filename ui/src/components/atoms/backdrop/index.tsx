import { Backdrop, CircularProgress } from '@mui/material'
import { FC } from 'react'

interface ICustomBackdropProps {
  open: boolean
}

const CustomBackdrop: FC<ICustomBackdropProps> = ({ open }) => {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default CustomBackdrop

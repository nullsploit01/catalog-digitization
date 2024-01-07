import { ICustomModalProps } from './interface'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { FC } from 'react'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const CustomModal: FC<ICustomModalProps> = ({ open, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </Modal>
  )
}

export default CustomModal

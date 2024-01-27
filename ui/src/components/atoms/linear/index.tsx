import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { FC, Fragment } from 'react'

interface ICustomLinearProps {
  show?: boolean
}

const CustomLinear: FC<ICustomLinearProps> = ({ show }) => {
  return (
    <Fragment>
      {show && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </Fragment>
  )
}

export default CustomLinear

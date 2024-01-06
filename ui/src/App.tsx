import GetStartedMenu from './components/organisms/get-started-menu'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Catalog Digitization</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          height: '80%',
          p: 5
        }}
      >
        <GetStartedMenu />
      </Box>
    </Box>
  )
}

export default App

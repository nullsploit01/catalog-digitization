import AddProductsMenu from './components/organisms/add-products-menu'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Catalog Digitization</Typography>
      </Box>
      <Box sx={{ height: '80%', overflow: 'auto' }}></Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          px: 5
        }}
      >
        <AddProductsMenu />
      </Box>
    </Box>
  )
}

export default App

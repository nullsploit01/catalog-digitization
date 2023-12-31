import './App.css'
import FileUploadButton from './components/atoms/buttons/file-upload'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <div>
      <Typography variant="h4">Catalog Digitization</Typography>
      <Box sx={{ p: 3 }}>
        <p>Upload Product images</p>
        <FileUploadButton />
      </Box>
    </div>
  )
}

export default App

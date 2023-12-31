import './App.css'
import FileUploadButton from './components/atoms/buttons/file-upload'
import { Box, Typography } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [_files, setFiles] = useState<FileList | null>(null)

  const onFileUpload = (files: FileList | null) => {
    setFiles(files)
  }

  return (
    <div>
      <Typography variant="h4">Catalog Digitization</Typography>
      <Box sx={{ p: 3 }}>
        <p>Upload Product images</p>
        <FileUploadButton onUpload={onFileUpload} multiple />
      </Box>
    </div>
  )
}

export default App

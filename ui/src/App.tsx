import './App.css'
import FileUploadButton from './components/atoms/buttons/file-upload'
import { imageService } from './services/image'
import { Box, Button, Typography } from '@mui/material'
import { useState } from 'react'

const App = () => {
  const [_files, setFiles] = useState<FileList | null>(null)

  const onFileUpload = (files: FileList | null) => {
    setFiles(files)
  }

  const onUpload = () => {
    if (!_files) {
      return
    }

    imageService.uploadIMages(_files).then((r) => console.log(r.data))
  }

  return (
    <div>
      <Typography variant="h4">Catalog Digitization</Typography>
      <Box sx={{ p: 3 }}>
        <p>Upload Product images</p>
        <FileUploadButton onUpload={onFileUpload} multiple />
        <Button onClick={onUpload}>Upload</Button>
      </Box>
    </div>
  )
}

export default App

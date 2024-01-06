import FileUploadButton from './components/atoms/buttons/file-upload'
import CustomMenu from './components/molecules/menu'
import GetStartedMenu from './components/organisms/get-started-menu'
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
    <Box sx={{ height: '100vh', p: 3 }}>
      <Typography variant="h4">Catalog Digitization</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%'
        }}
      >
        <GetStartedMenu />
      </Box>
    </Box>
  )
}

export default App

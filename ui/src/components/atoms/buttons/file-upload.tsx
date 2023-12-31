import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

interface IFileUploadButtonProps {
  onInput?: (files: FileList | null) => void
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const FileUploadButton: FC<IFileUploadButtonProps> = ({ onInput }) => {
  return (
    <Button component="label" color="secondary" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput
        onChange={(e) => onInput?.(e.target.files)}
        type="file"
        accept="image/*"
      />
    </Button>
  )
}

export default FileUploadButton

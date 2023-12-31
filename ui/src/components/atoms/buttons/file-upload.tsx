import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { FC } from 'react'

interface IFileUploadButtonProps {
  onUpload?: (files: FileList | null) => void
  multiple?: boolean
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

const FileUploadButton: FC<IFileUploadButtonProps> = ({ onUpload, multiple }) => {
  return (
    <Button component="label" color="secondary" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput
        onChange={(e) => {
          onUpload?.(e.target.files)
        }}
        multiple={multiple}
        type="file"
        accept="image/*"
      />
    </Button>
  )
}

export default FileUploadButton

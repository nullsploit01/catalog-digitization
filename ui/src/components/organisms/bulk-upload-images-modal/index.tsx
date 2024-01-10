import FileUploadButton from 'src/components/atoms/buttons/file-upload'
import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'

import { Box } from '@mui/material'
import { FC } from 'react'

const BulkUploadImagesModal: FC = () => {
  const { isBulkUploadImagesModalOpen, closeBulkUploadImagesModal } = useProducts()

  return (
    <CustomModal open={isBulkUploadImagesModalOpen} handleClose={closeBulkUploadImagesModal}>
      <Box>
        <FileUploadButton label="Upload Images" />
      </Box>
    </CustomModal>
  )
}

export default BulkUploadImagesModal

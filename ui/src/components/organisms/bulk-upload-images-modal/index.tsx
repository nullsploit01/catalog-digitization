import FileUploadButton from 'src/components/atoms/buttons/file-upload'
import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'

import { Box } from '@mui/material'
import { FC } from 'react'

const BulkUploadImagesModal: FC = () => {
  const { isBulkUploadImagesModalOpen, closeBulkUploadImagesModal, bulkUploadProductImages } =
    useProducts()

  const onUpload = (images: FileList | null) => {
    if (!images || !images.length) return
    bulkUploadProductImages(images)
    closeBulkUploadImagesModal()
  }

  return (
    <CustomModal open={isBulkUploadImagesModalOpen} handleClose={closeBulkUploadImagesModal}>
      <Box>
        <FileUploadButton multiple onUpload={onUpload} label="Upload Images" />
      </Box>
    </CustomModal>
  )
}

export default BulkUploadImagesModal

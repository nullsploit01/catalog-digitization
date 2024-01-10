import FileUploadButton from 'src/components/atoms/buttons/file-upload'
import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'
import { imageService } from 'src/services/image'

import { Box } from '@mui/material'
import { FC, Fragment } from 'react'

const EditProductImageModal: FC = () => {
  const { isProductImageEditModalOpen, closeProductImageEditModal, productToEdit, updateProduct } =
    useProducts()

  if (!productToEdit) return null

  const onUpload = (image: FileList | null) => {
    if (!image || !image.length) return

    const reader = new FileReader()

    reader.onload = () => {
      imageService.uploadIMages(image).then((response) => {
        const product = {
          ...productToEdit,
          color: response.data[0].value,
          image: reader.result ?? ''
        }

        updateProduct(product)
      })

      closeProductImageEditModal()
    }

    reader.readAsDataURL(image[0])
  }

  return (
    <Fragment>
      <CustomModal open={isProductImageEditModalOpen} handleClose={closeProductImageEditModal}>
        <Box>
          <FileUploadButton onUpload={onUpload} label="Upload Image" />
        </Box>
      </CustomModal>
    </Fragment>
  )
}

export default EditProductImageModal

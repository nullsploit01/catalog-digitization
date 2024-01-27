import FileUploadButton from 'src/components/atoms/buttons/file-upload'
import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'
import { productService } from 'src/services/product'

import { Box } from '@mui/material'
import isEqual from 'lodash/isEqual'
import { FC, Fragment } from 'react'

const EditProductImageModal: FC = () => {
  const { isProductImageEditModalOpen, closeProductImageEditModal, productToEdit, updateProduct } =
    useProducts()

  if (!productToEdit) return null

  const onUpload = (image: FileList | null) => {
    if (!image || !image.length) return

    const reader = new FileReader()

    reader.onload = () => {
      productService.uploadProductImages(image).then((response) => {
        const product = {
          ...productToEdit,
          color: response.data.find((res) =>
            Array.from(image).some((i) => isEqual(res.name, i.name))
          )?.color,
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

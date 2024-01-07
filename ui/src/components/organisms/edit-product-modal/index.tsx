import { Box, Typography } from '@mui/material'

import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'

const EditProductModal = () => {
  const { productToEdit, closeEditProductModal } = useProducts()

  return (
    <CustomModal open={Boolean(productToEdit)} handleClose={closeEditProductModal}>
      <Box>
        <Typography variant="h5">{productToEdit?.name}</Typography>
      </Box>
    </CustomModal>
  )
}

export default EditProductModal

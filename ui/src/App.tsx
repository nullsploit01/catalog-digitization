import AddProductsMenu from 'src/components/organisms/add-products-menu'
import CatalogProducts from 'src/components/organisms/catalog-products'
import EditProductModal from 'src/components/organisms/edit-product-modal'

import BulkUploadImagesModal from './components/organisms/bulk-upload-images-modal'
import { Box, Typography } from '@mui/material'

const App = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Catalog Digitization</Typography>
      </Box>
      <Box sx={{ height: '80%', overflow: 'auto' }}>
        <CatalogProducts />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          px: 5
        }}
      >
        <AddProductsMenu />
        <EditProductModal />
        <BulkUploadImagesModal />
      </Box>
    </Box>
  )
}

export default App

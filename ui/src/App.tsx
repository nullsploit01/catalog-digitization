import { useNotification } from './hooks/notification'
import { Box, Typography } from '@mui/material'
import { lazy, useEffect } from 'react'

const AddProductsMenu = lazy(() => import('src/components/organisms/add-products-menu'))
const CatalogProducts = lazy(() => import('src/components/organisms/catalog-products'))
const EditProductModal = lazy(() => import('src/components/organisms/edit-product-modal'))
const BulkUploadImagesModal = lazy(() => import('./components/organisms/bulk-upload-images-modal'))

const App = () => {
  const { showNotification } = useNotification()
  useEffect(() => {
    showNotification('test')
  }, [])
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

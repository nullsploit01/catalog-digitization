import { useProducts } from 'src/hooks/products'

import CustomBackdrop from './components/atoms/backdrop'
import { Box, Typography } from '@mui/material'
import { lazy, Suspense } from 'react'

const AddProductsMenu = lazy(() => import('src/components/organisms/add-products-menu'))
const CatalogProducts = lazy(() => import('src/components/organisms/catalog-products'))
const EditProductModal = lazy(() => import('src/components/organisms/edit-product-modal'))
const BulkUploadImagesModal = lazy(() => import('./components/organisms/bulk-upload-images-modal'))

const App = () => {
  const { products } = useProducts()

  return (
    <Box sx={{ height: '100vh' }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4">Catalog Digitization</Typography>
      </Box>
      <Box sx={{ height: '80%', overflow: 'auto' }}>
        <Suspense fallback={<CustomBackdrop open />}>
          <CatalogProducts />
        </Suspense>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          px: 5
        }}
      >
        <Suspense fallback={<CustomBackdrop open />}>
          {products.length !== 0 && <AddProductsMenu />}
        </Suspense>
        <Suspense fallback={<CustomBackdrop open />}>
          <EditProductModal />
        </Suspense>
        <Suspense fallback={<CustomBackdrop open />}>
          <BulkUploadImagesModal />
        </Suspense>
      </Box>
    </Box>
  )
}

export default App

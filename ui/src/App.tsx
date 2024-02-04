import { useProducts } from 'src/hooks/products'

import { Box } from '@mui/material'
import { lazy } from 'react'

const AddProductsMenu = lazy(() => import('src/components/organisms/add-products-menu'))
const CatalogProducts = lazy(() => import('src/components/organisms/catalog-products'))
const EditProductModal = lazy(() => import('src/components/organisms/edit-product-modal'))
const BulkUploadImagesModal = lazy(
  () => import('src/components/organisms/bulk-upload-images-modal')
)
const CustomNavBar = lazy(() => import('src/components/molecules/navbar'))

const App = () => {
  const { products } = useProducts()

  return (
    <Box sx={{ height: '100vh' }}>
      <CustomNavBar />
      <Box sx={{ height: '80%', overflow: 'auto' }}>
        <CatalogProducts />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          py: 3,
          px: 5
        }}
      >
        {products.length !== 0 && <AddProductsMenu />}
        <EditProductModal />
        <BulkUploadImagesModal />
      </Box>
    </Box>
  )
}

export default App

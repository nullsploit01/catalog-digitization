import noProductImage from 'src/assets/images/no_product.png'
import AddProductsMenu from 'src/components/organisms/add-products-menu'

import { Box, Typography } from '@mui/material'

const NoProducts = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        placeItems: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ m: 5 }}>
        <img height={400} width={400} src={noProductImage} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ m: 3 }}>
          Add products to your catalog{' '}
        </Typography>
        <AddProductsMenu />
      </Box>
    </Box>
  )
}

export default NoProducts

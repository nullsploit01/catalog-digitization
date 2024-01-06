import CustomCard from 'src/components/molecules/card'
import { useProducts } from 'src/hooks/products'

import { Box } from '@mui/material'

const CatalogProducts = () => {
  const { products } = useProducts()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => {
        return (
          <Box key={index} sx={{ p: 3 }}>
            <CustomCard title={product.name} description={product.description} />
          </Box>
        )
      })}
    </Box>
  )
}

export default CatalogProducts

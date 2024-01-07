import defaultProductImage from 'src/assets/images/default_product_image.png'
import CustomCard from 'src/components/molecules/card'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'
import { getFormattedPrice } from 'src/utils'

import { Box, Typography } from '@mui/material'
import { Fragment } from 'react'

const CatalogProducts = () => {
  const { products } = useProducts()

  const renderContent = (product: IProduct) => {
    return (
      <Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {getFormattedPrice(product.price)}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </Fragment>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => {
        return (
          <Box key={index} sx={{ p: 3 }}>
            <CustomCard content={renderContent(product)} image={defaultProductImage} />
          </Box>
        )
      })}
    </Box>
  )
}

export default CatalogProducts

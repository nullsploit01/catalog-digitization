import { Delete, Edit } from '@mui/icons-material/'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { Fragment } from 'react'

import defaultProductImage from 'src/assets/images/default_product_image.png'
import CustomCard from 'src/components/molecules/card'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'
import { getFormattedPrice } from 'src/utils'

const CatalogProducts = () => {
  const { products, removeProduct, editProduct } = useProducts()

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

  const renderActions = (product: IProduct) => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
        <ButtonGroup variant="text">
          <Button onClick={() => editProduct(product)}>
            <Edit color="secondary" />
          </Button>
          <Button onClick={() => removeProduct(product)}>
            <Delete color="error" />
          </Button>
        </ButtonGroup>
      </Box>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product, index) => {
        return (
          <Box key={index} sx={{ p: 3 }}>
            <CustomCard
              content={renderContent(product)}
              image={defaultProductImage}
              actions={renderActions(product)}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export default CatalogProducts

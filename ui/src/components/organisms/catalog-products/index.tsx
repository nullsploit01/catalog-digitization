import CustomCard from 'src/components/molecules/card'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'
import { getFormattedPrice } from 'src/utils'

import { Delete, Edit } from '@mui/icons-material/'
import { Box, ButtonGroup, IconButton, Typography } from '@mui/material'
import { Fragment } from 'react'

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
          <IconButton onClick={() => editProduct(product)}>
            <Edit color="secondary" />
          </IconButton>
          <IconButton onClick={() => removeProduct(product)}>
            <Delete color="error" />
          </IconButton>
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
              image={product.image.toString()}
              actions={renderActions(product)}
            />
          </Box>
        )
      })}
    </Box>
  )
}

export default CatalogProducts

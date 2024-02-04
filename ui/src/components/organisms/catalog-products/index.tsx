import CustomBackdrop from 'src/components/atoms/backdrop'
import CustomCard from 'src/components/molecules/card'
import NoProductsFound from 'src/components/molecules/no-products-found'
import NoProducts from 'src/components/organisms/no-products'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'
import { getFormattedPrice } from 'src/utils'

import CatalogProductSkeleton from './components/catalog-product-skeleton'
import { Delete, Edit } from '@mui/icons-material/'
import { Box, ButtonGroup, IconButton, Typography } from '@mui/material'
import { Fragment } from 'react'

const CatalogProducts = () => {
  const { searchResults, products, removeProduct, editProduct, loading } = useProducts()

  const renderContent = (product: IProduct) => {
    return (
      <Fragment>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ lineHeight: '50%' }} gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="caption">Product #: {product?.id}</Typography>
          </Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      {loading && !!!products.length ? (
        <CatalogProductSkeleton />
      ) : (
        <Fragment>
          <CustomBackdrop message="Processing Images" open={loading} />
          {searchResults.map((product, index) => {
            return (
              <Box key={index} sx={{ p: 3 }}>
                <CustomCard
                  content={renderContent(product)}
                  image={product.image?.toString()}
                  actions={renderActions(product)}
                />
              </Box>
            )
          })}
        </Fragment>
      )}
      {!loading && !!!products.length && <NoProducts />}
      {!loading && !!products.length && !!!searchResults.length && <NoProductsFound />}
    </Box>
  )
}

export default CatalogProducts

import noProductFoundImage from 'src/assets/images/no_products_found.png'

import { Box } from '@mui/material'

const NoProductsFound = () => {
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
        <img src={noProductFoundImage} />
      </Box>
    </Box>
  )
}

export default NoProductsFound

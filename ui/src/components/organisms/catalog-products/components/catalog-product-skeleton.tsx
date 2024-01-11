import { Box, Skeleton } from '@mui/material'

const CatalogProductSkeleton = () => {
  const NUMBER_OF_SKELETONS = 12

  return [...Array(NUMBER_OF_SKELETONS)].map((_, i) => {
    return (
      <Box key={i} m={2}>
        <Skeleton variant="rectangular" width={320} height={200} />
        <Skeleton variant="rectangular" width={320} height={30} sx={{ mt: 2 }} />
        <Skeleton variant="rectangular" width={320} height={30} sx={{ mt: 2 }} />
        <Skeleton variant="rectangular" width={320} height={30} sx={{ mt: 2 }} />
      </Box>
    )
  })
}

export default CatalogProductSkeleton

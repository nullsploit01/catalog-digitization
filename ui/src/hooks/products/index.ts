import { useContext } from 'react'

import { ProductContext } from 'src/providers/product-provider'

export const useProducts = () => {
  const productContext = useContext(ProductContext)

  if (!productContext) {
    throw new Error('Please use this hook under Product Provider')
  }

  return productContext
}

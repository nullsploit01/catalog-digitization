import { ProductContext } from 'src/providers/product-provider'

import { useContext } from 'react'

export const useProducts = () => {
  const productContext = useContext(ProductContext)

  if (!productContext) {
    throw new Error('Please use this hook under Product Provider')
  }

  return productContext
}

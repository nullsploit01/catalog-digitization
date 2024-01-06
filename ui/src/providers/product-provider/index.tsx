import { IProduct } from 'src/models/product'
import { generateID } from 'src/utils'

import { IProductContext, IProductContextProvider } from './interface'
import { createContext, FC, useState } from 'react'

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductContextProvider: FC<IProductContextProvider> = ({ children }) => {
  const [_products, setProducts] = useState<IProduct[]>([])

  const addProduct = (product: IProduct | null = null) => {
    if (!product) {
      product = {
        id: generateID(),
        name: `Product ${_products.length + 1}`,
        price: 0
      }
    }

    setProducts([..._products, product])
  }

  return (
    <ProductContext.Provider value={{ products: _products, addProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

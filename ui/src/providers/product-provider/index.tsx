import { IProduct } from 'src/models/product'

import { IProductContext, IProductContextProvider } from './interface'
import { createContext, FC, useState } from 'react'

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductContextProvider: FC<IProductContextProvider> = ({ children }) => {
  const [_products, setProducts] = useState<IProduct[]>([])

  return <ProductContext.Provider value={{ products: _products }}></ProductContext.Provider>
}

import { IProductContext, IProductContextProvider } from './interface'
import { createContext, FC, useRef, useState } from 'react'

import { IProduct } from 'src/models/product'
import { generateID } from 'src/utils'

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductContextProvider: FC<IProductContextProvider> = ({ children }) => {
  const [_products, setProducts] = useState<IProduct[]>([])
  const productCount = useRef(1)

  const addProduct = (product: IProduct | null = null) => {
    if (!product) {
      product = {
        id: generateID(),
        name: `Product ${productCount.current}`,
        price: 0
      }
    }
    productCount.current += 1
    setProducts([product, ..._products])
  }

  const removeProduct = (product: IProduct) => {
    const products = _products.filter((p) => p.id !== product.id)
    setProducts(products)
  }

  return (
    <ProductContext.Provider value={{ products: _products, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

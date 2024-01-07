import { ReactNode } from 'react'

import { IProduct } from 'src/models/product'

export interface IProductContext {
  products: IProduct[]
  addProduct: (product?: IProduct | null) => void
  removeProduct: (product: IProduct) => void
}

export interface IProductContextProvider {
  children: ReactNode
}

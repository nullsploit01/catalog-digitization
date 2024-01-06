import { IProduct } from 'src/models/product'

import { ReactNode } from 'react'

export interface IProductContext {
  products: IProduct[]
  addProduct: (product?: IProduct | null) => void
}

export interface IProductContextProvider {
  children: ReactNode
}

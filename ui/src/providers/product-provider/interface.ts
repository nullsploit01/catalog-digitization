import { IProduct } from 'src/models/product'

import { ReactNode } from 'react'

export interface IProductContext {
  products: IProduct[]
}

export interface IProductContextProvider {
  children: ReactNode
}

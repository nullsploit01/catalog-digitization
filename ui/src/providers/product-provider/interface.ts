import { ReactNode } from 'react'

import { IProduct } from 'src/models/product'

export interface IProductContext {
  products: IProduct[]
  productToEdit: IProduct | null
  editProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  addProduct: (product?: IProduct | null) => void
  closeEditProductModal: () => void
}

export interface IProductContextProvider {
  children: ReactNode
}

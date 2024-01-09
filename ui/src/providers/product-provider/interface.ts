import { ReactNode } from 'react'

import { IProduct } from 'src/models/product'

export interface IProductContext {
  products: IProduct[]
  productToEdit: IProduct | null
  closeEditProductModal: () => void
  editProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  updateProduct: (product: IProduct) => void
  addProduct: (product?: IProduct | null) => void
}

export interface IProductContextProvider {
  children: ReactNode
}

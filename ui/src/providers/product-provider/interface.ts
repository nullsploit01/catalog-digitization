import { IProduct } from 'src/models/product'

import { ReactNode } from 'react'

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

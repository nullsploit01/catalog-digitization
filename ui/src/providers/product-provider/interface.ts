import { IProduct } from 'src/models/product'

import { ReactNode } from 'react'

export interface IProductContext {
  products: IProduct[]
  productToEdit: IProduct | null
  isProductImageEditModalOpen: boolean
  closeEditProductModal: () => void
  editProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  updateProduct: (product: IProduct) => void
  addProduct: (product?: IProduct | null) => void
  closeProductImageEditModal: () => void
  openProductImageEditModal: () => void
}

export interface IProductContextProvider {
  children: ReactNode
}

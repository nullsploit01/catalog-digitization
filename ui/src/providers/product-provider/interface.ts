import { IProduct } from 'src/models/product'

import { ReactNode } from 'react'

export interface IProductContext {
  products: IProduct[]
  searchResults: IProduct[]
  productToEdit: IProduct | null
  isProductImageEditModalOpen: boolean
  isBulkUploadImagesModalOpen: boolean
  loading: boolean
  setLoading: (value: boolean) => void
  handleProductSearch: (searchQuery: string) => void
  closeEditProductModal: () => void
  editProduct: (product: IProduct) => void
  removeProduct: (product: IProduct) => void
  updateProduct: (product: IProduct) => void
  addProduct: (product?: IProduct | null) => void
  bulkUploadProductImages: (images: FileList) => void
  closeProductImageEditModal: () => void
  openProductImageEditModal: () => void
  openBulkUploadImagesModal: () => void
  closeBulkUploadImagesModal: () => void
}

export interface IProductContextProvider {
  children: ReactNode
}

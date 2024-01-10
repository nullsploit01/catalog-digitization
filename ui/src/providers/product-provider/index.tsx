import defaultProductImage from 'src/assets/images/default_product_image.png'
import { IProduct } from 'src/models/product'
import { generateID } from 'src/utils'

import { IProductContext, IProductContextProvider } from './interface'
import { createContext, FC, useRef, useState } from 'react'

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductContextProvider: FC<IProductContextProvider> = ({ children }) => {
  const productCount = useRef(1)

  const [_products, setProducts] = useState<IProduct[]>([])
  const [_productToEdit, setProductToEdit] = useState<IProduct | null>(null)
  const [_showProductImageEditModal, setShowProductImageEditModal] = useState(false)
  const [_showBulkUploadImagesModal, setShowBulkUploadImagesModal] = useState(false)

  const addProduct = (product: IProduct | null = null) => {
    if (!product) {
      product = {
        id: generateID(),
        name: `Product ${productCount.current}`,
        price: 0,
        image: defaultProductImage
      }
    }
    productCount.current += 1
    setProducts([product, ..._products])
  }

  const removeProduct = (product: IProduct) => {
    const products = _products.filter((p) => p.id !== product.id)
    setProducts(products)
  }

  const editProduct = (product: IProduct) => {
    setProductToEdit(product)
  }

  const updateProduct = (product: IProduct) => {
    const products = _products.filter((p) => p.id !== product.id)
    setProducts([product, ...products])
    setProductToEdit(product)
  }

  const closeEditProductModal = () => {
    setProductToEdit(null)
  }

  const openProductImageEditModal = () => {
    setShowProductImageEditModal(true)
  }

  const closeProductImageEditModal = () => {
    setShowProductImageEditModal(false)
  }

  const openBulkUploadImagesModal = () => {
    setShowBulkUploadImagesModal(true)
  }

  const closeBulkUploadImagesModal = () => {
    setShowBulkUploadImagesModal(false)
  }

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        removeProduct,
        updateProduct,
        editProduct,
        closeEditProductModal,
        isProductImageEditModalOpen: _showProductImageEditModal,
        isBulkUploadImagesModalOpen: _showBulkUploadImagesModal,
        openBulkUploadImagesModal,
        closeBulkUploadImagesModal,
        openProductImageEditModal,
        closeProductImageEditModal,
        products: _products,
        productToEdit: _productToEdit
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

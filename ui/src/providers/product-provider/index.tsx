import defaultProductImage from 'src/assets/images/default_product_image.png'
import { useNotification } from 'src/hooks/notification'
import { IProduct } from 'src/models/product'
import { productService } from 'src/services/product'
import { generateID } from 'src/utils'

import { IProductContext, IProductContextProvider } from './interface'
import { AxiosError } from 'axios'
import { distance } from 'fastest-levenshtein'
import { isEqual } from 'lodash'
import { createContext, FC, useEffect, useRef, useState } from 'react'

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductContextProvider: FC<IProductContextProvider> = ({ children }) => {
  const { showNotification } = useNotification()

  const productCount = useRef(1)

  const [_loading, setLoading] = useState(false)
  const [_products, setProducts] = useState<IProduct[]>([])
  const [_searchResults, setSearchResults] = useState<IProduct[]>([])
  const [_productToEdit, setProductToEdit] = useState<IProduct | null>(null)
  const [_showProductImageEditModal, setShowProductImageEditModal] = useState(false)
  const [_showBulkUploadImagesModal, setShowBulkUploadImagesModal] = useState(false)

  useEffect(() => {
    productService.ping()
  }, [])

  useEffect(() => {
    setSearchResults(_products)
  }, [_products])

  const addProduct = (product: IProduct | null = null) => {
    product = {
      id: product?.id ?? generateID(10),
      name: product?.name ?? `Product ${productCount.current}`,
      price: product?.price ?? 0,
      image: product?.image ?? defaultProductImage,
      ...product
    }

    productCount.current += 1

    setProducts((previousState) => {
      if (previousState && product) {
        return [product, ...previousState]
      } else {
        return previousState
      }
    })
  }

  const removeProduct = (product: IProduct) => {
    const products = _products.filter((p) => p.id !== product.id)
    setProducts(products)
    showNotification(`Product ${product.name} Removed`, 'success')
  }

  const editProduct = (product: IProduct) => {
    setProductToEdit(product)
  }

  const updateProduct = (product: IProduct) => {
    const products = _products.filter((p) => p.id !== product.id)
    setProducts([product, ...products])
    setProductToEdit(product)
    showNotification('Updated Product', 'success')
  }

  const bulkUploadProductImages = async (images: FileList) => {
    const batchingSize = 15
    setLoading(true)
    try {
      for (let batchStart = 0; batchStart < images.length; batchStart += batchingSize) {
        const batchedImages = Array.from(images).slice(batchStart, batchStart + batchingSize)

        const files: FormData = new FormData()
        batchedImages.forEach((image, index) => {
          files.append(`file${index + 1}`, image)
        })

        await new Promise((r) => setTimeout(r, 500))

        // enable this api call to get image colors
        // const { data } = await productService.uploadProductImages(files)

        Array.from(batchedImages).map((image) => {
          const reader = new FileReader()
          reader.readAsDataURL(image)
          reader.onload = () => {
            const product = {
              image: reader.result ?? ''
              // color: data.find((res) => isEqual(image.name, res.name))?.color
            }
            addProduct(product)
          }
        })
      }
      showNotification('Products Added Successfully', 'success')
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        showNotification('Something went wrong while uplaoding images', 'error')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleProductSearch = (searchQuery: string) => {
    if (!searchQuery?.trim()) {
      setSearchResults(_products)
      return
    }

    const threshold = 3
    const normalizedQuery = searchQuery.toLowerCase()

    const calculateLevenshteinDistance = (stringToCompare: string) =>
      distance(stringToCompare || '', normalizedQuery)

    const filteredProducts = _products.filter((product) => {
      const attributesToCheck: (keyof IProduct)[] = [
        'id',
        'name',
        'description',
        'brand',
        'model',
        'category',
        'subCategory'
      ]

      return attributesToCheck.some((attribute) => {
        let attributeValue = product[attribute]
        if (attributeValue && typeof attributeValue === 'string') {
          attributeValue = attributeValue.toString().toLowerCase()
          const words = attributeValue.split(/\s*[\s,;.!]+\s*/)
          return (
            words.some((word) => calculateLevenshteinDistance(word) <= threshold) ||
            attributeValue.includes(normalizedQuery)
          )
        }
        return false
      })
    })

    setSearchResults(filteredProducts)
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
        loading: _loading,
        searchResults: _searchResults,
        products: _products,
        productToEdit: _productToEdit,
        isBulkUploadImagesModalOpen: _showBulkUploadImagesModal,
        isProductImageEditModalOpen: _showProductImageEditModal,
        setLoading,
        addProduct,
        editProduct,
        removeProduct,
        updateProduct,
        handleProductSearch,
        closeEditProductModal,
        bulkUploadProductImages,
        openBulkUploadImagesModal,
        openProductImageEditModal,
        closeProductImageEditModal,
        closeBulkUploadImagesModal
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

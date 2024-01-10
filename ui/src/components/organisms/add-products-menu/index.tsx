import CustomMenu from 'src/components/molecules/menu'
import { AddMenuOptions } from 'src/constants/menu'
import { Operations } from 'src/constants/operations'
import { useProducts } from 'src/hooks/products'

import { Add } from '@mui/icons-material/'
import React from 'react'

const AddProductsMenu: React.FC = () => {
  const { addProduct, openBulkUploadImagesModal } = useProducts()

  const handleClick = (value: string) => {
    switch (value) {
      case Operations.AddProduct:
        addProduct()
        break

      case Operations.BulkUpload:
        openBulkUploadImagesModal()
        break

      default:
        break
    }
  }

  return <CustomMenu icon={<Add />} onClick={handleClick} options={AddMenuOptions} />
}

export default AddProductsMenu

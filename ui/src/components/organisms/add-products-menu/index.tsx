import CustomMenu from 'src/components/molecules/menu'
import { AddMenuOptions } from 'src/constants/menu'
import { Operations } from 'src/constants/operations'
import { useProducts } from 'src/hooks/products'

import { Add } from '@mui/icons-material/'
import React from 'react'

const AddProductsMenu: React.FC = () => {
  const { addProduct } = useProducts()

  const handleClick = (value: string) => {
    if (value === Operations.AddProduct) {
      addProduct()
    }
  }

  return <CustomMenu icon={<Add />} onClick={handleClick} options={AddMenuOptions} />
}

export default AddProductsMenu

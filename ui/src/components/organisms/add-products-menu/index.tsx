import CustomMenu from 'src/components/molecules/menu'

import { Add } from '@mui/icons-material/'
import UploadIcon from '@mui/icons-material/Upload'
import React from 'react'

const AddProductsMenu: React.FC = () => {
  const options = [
    {
      name: 'Add Product',
      icon: <Add />
    },
    {
      name: 'Bulk Upload Images',
      icon: <UploadIcon />
    }
  ]
  return <CustomMenu icon={<Add />} options={options} />
}

export default AddProductsMenu

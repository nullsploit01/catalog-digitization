import CustomMenu from 'src/components/molecules/menu'

import { Add } from '@mui/icons-material/'
import AddIcon from '@mui/icons-material/Add'
import UploadIcon from '@mui/icons-material/Upload'
import React from 'react'

const GetStartedMenu: React.FC = () => {
  const options = [
    {
      name: 'Add Product',
      icon: <AddIcon />
    },
    {
      name: 'Bulk Upload Images',
      icon: <UploadIcon />
    }
  ]
  return <CustomMenu icon={<AddIcon />} options={options} />
}

export default GetStartedMenu

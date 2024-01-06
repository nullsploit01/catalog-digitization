import { Operations } from '../operations'
import { Add, Upload } from '@mui/icons-material'

export const AddMenuOptions = [
  {
    name: 'Add Product',
    icon: <Add />,
    value: Operations.AddProduct
  },
  {
    name: 'Bulk Upload Images',
    icon: <Upload />,
    value: Operations.BulkUpload
  }
]

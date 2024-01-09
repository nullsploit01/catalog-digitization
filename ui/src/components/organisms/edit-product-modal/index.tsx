import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Form, Formik } from 'formik'
import { Fragment } from 'react'

import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'

const EditProductModal = () => {
  const { productToEdit, closeEditProductModal, updateProduct } = useProducts()

  const onSubmit = (product: IProduct) => {
    updateProduct(product)
    closeEditProductModal()
  }

  return (
    <Fragment>
      {productToEdit && (
        <CustomModal open={Boolean(productToEdit)} handleClose={closeEditProductModal}>
          <Box flexGrow={1}>
            <Typography variant="h5">Edit {productToEdit?.name}</Typography>
            <Grid container spacing={2}>
              <Formik initialValues={productToEdit} onSubmit={onSubmit}>
                {({ values, touched, handleChange }) => (
                  <Form>
                    <Grid xs={12}>
                      <TextField
                        sx={{ p: 2 }}
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        placeholder="Name"
                      />
                      <TextField
                        sx={{ p: 2 }}
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        name="price"
                        onChange={handleChange}
                        value={values.price}
                        placeholder="Price"
                      />
                    </Grid>
                    <Grid xs={12}>
                      <Box sx={{ maxWidth: 'inherit', p: 2 }}>
                        <TextField
                          fullWidth
                          multiline
                          name="description"
                          placeholder="Description"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        sx={{ p: 2 }}
                        name="color"
                        placeholder="Color"
                        onChange={handleChange}
                        value={values.color}
                      />
                      <TextField
                        sx={{ p: 2 }}
                        name="brand"
                        placeholder="Brand"
                        onChange={handleChange}
                        value={values.brand}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        sx={{ p: 2 }}
                        name="model"
                        placeholder="Model"
                        onChange={handleChange}
                        value={values.model}
                      />
                      <TextField
                        sx={{ p: 2 }}
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        name="inventory"
                        onChange={handleChange}
                        value={values.inventory}
                        placeholder="Inventory"
                      />
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button onClick={closeEditProductModal} sx={{ mx: 3 }} color="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" color="secondary" variant="contained">
                        Save
                      </Button>
                    </Box>
                  </Form>
                )}
              </Formik>
            </Grid>
          </Box>
        </CustomModal>
      )}
    </Fragment>
  )
}

export default EditProductModal

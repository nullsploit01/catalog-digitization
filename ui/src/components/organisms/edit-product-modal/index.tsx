import CustomModal from 'src/components/molecules/modal'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'

import { Box, Button, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Form, Formik } from 'formik'
import { Fragment } from 'react'

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
            <Typography mb={2} variant="h5">
              Edit {productToEdit?.name}
            </Typography>
            <Grid container spacing={2}>
              <Formik initialValues={productToEdit} onSubmit={onSubmit}>
                {({ values, dirty, handleChange }) => (
                  <Form>
                    <Box sx={{ mr: 3, mb: 2, ml: 2 }}>
                      <Grid container spacing={2}>
                        <Grid xs={4}>
                          <Box sx={{ border: 1, height: '100%' }}></Box>
                        </Grid>
                        <Grid lg={8}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'flex-end',
                              flexDirection: 'column',
                              maxWidth: 'inherit'
                            }}
                          >
                            <TextField
                              fullWidth
                              color="secondary"
                              sx={{ mx: 1, mb: 2 }}
                              name="name"
                              onChange={handleChange}
                              value={values.name}
                              label="Name"
                            />
                            <TextField
                              fullWidth
                              color="secondary"
                              sx={{ mx: 1, mb: 2 }}
                              type="number"
                              InputProps={{ inputProps: { min: 0 } }}
                              name="price"
                              onChange={handleChange}
                              value={values.price}
                              label="Price"
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    <Grid xs={12}>
                      <Box sx={{ maxWidth: 'inherit', mx: 1, mb: 1 }}>
                        <TextField
                          color="secondary"
                          fullWidth
                          multiline
                          name="description"
                          label="Description"
                          onChange={handleChange}
                          value={values.description}
                        />
                      </Box>
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="brand"
                        label="Brand"
                        onChange={handleChange}
                        value={values.brand}
                      />
                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="model"
                        label="Model"
                        onChange={handleChange}
                        value={values.model}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="category"
                        label="Category"
                        onChange={handleChange}
                        value={values.category}
                      />
                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="subCategory"
                        label="Sub Category"
                        onChange={handleChange}
                        value={values.subCategory}
                      />
                    </Grid>
                    <Grid xs={12}>
                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="color"
                        label="Color"
                        onChange={handleChange}
                        value={values.color}
                      />

                      <TextField
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        type="number"
                        InputProps={{ inputProps: { min: 0 } }}
                        name="inventory"
                        onChange={handleChange}
                        value={values.inventory}
                        label="Inventory"
                      />
                    </Grid>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button onClick={closeEditProductModal} sx={{ mx: 3 }} color="secondary">
                        Cancel
                      </Button>
                      <Button disabled={!dirty} type="submit" color="secondary" variant="contained">
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

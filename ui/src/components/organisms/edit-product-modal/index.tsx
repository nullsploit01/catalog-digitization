import CustomLinear from 'src/components/atoms/linear'
import CustomModal from 'src/components/molecules/modal'
import { useNotification } from 'src/hooks/notification'
import { useProducts } from 'src/hooks/products'
import { IProduct } from 'src/models/product'
import { productService } from 'src/services/product'

import EditProductImageModal from './components/edit-product-image-modal'
import { KeyboardVoice } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardMedia,
  IconButton,
  TextField,
  Tooltip,
  Typography
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { AxiosError } from 'axios'
import clsx from 'clsx'
import { Form, Formik } from 'formik'
import { Fragment, useEffect, useState } from 'react'
import { useAudioRecorder } from 'react-audio-voice-recorder'

const EditProductModal = () => {
  const { productToEdit, closeEditProductModal, updateProduct, openProductImageEditModal } =
    useProducts()

  const { startRecording, stopRecording, recordingBlob, isRecording } = useAudioRecorder()
  const { showNotification } = useNotification()

  const [_productState, setProductState] = useState<IProduct>({} as IProduct)
  const [_showLinear, setShowLinear] = useState(false)

  useEffect(() => {
    if (productToEdit) {
      setProductState(productToEdit)
    }
  }, [productToEdit])

  useEffect(() => {
    if (!recordingBlob || !productToEdit) return
    processRecordedAudio()
  }, [recordingBlob])

  const closeModal = () => {
    setShowLinear(false)
    stopRecording()
    closeEditProductModal()
  }

  const onSave = (product: IProduct) => {
    updateProduct(product)
    closeModal()
  }

  const handleAudioClick = () => {
    if (!isRecording) {
      startRecording()
      return
    }

    stopRecording()
  }

  const processRecordedAudio = async () => {
    try {
      if (!recordingBlob) return

      setShowLinear(true)
      const formData = new FormData()
      formData.append('file', recordingBlob)
      productService
        .uploadVoiceInput(formData)
        .then(({ data }) => {
          setProductState({ ...productToEdit, ...data })
        })
        .finally(() => setShowLinear(false))
    } catch (error) {
      if (!(error instanceof AxiosError)) {
        showNotification('Something went wrong while processing audio')
      }
    }
  }

  return (
    <Fragment>
      {productToEdit && (
        <CustomModal open={Boolean(productToEdit)} handleClose={closeModal}>
          <EditProductImageModal />
          <Box p={4} flexGrow={1}>
            <Box
              sx={{
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ lineHeight: '50%' }}>
                <Typography variant="h5">Edit {_productState?.name}</Typography>
                <Typography variant="caption">Product #: {_productState?.id}</Typography>
              </Box>
              <Tooltip arrow placement="right" title="Voice Input">
                <IconButton className={clsx({ ripple: isRecording })} onClick={handleAudioClick}>
                  <KeyboardVoice fontSize="large" color="secondary" />
                </IconButton>
              </Tooltip>
            </Box>

            <Grid container spacing={2}>
              <Formik enableReinitialize={true} initialValues={_productState} onSubmit={onSave}>
                {({ values, handleChange }) => (
                  <Form>
                    <Box sx={{ mr: 3, mb: 2, ml: 2 }}>
                      <Grid container spacing={2}>
                        <Grid xs={4}>
                          <Box
                            sx={{
                              border: 1,
                              maxHeight: '130px',
                              maxWidth: '180px',
                              overflow: 'hidden',
                              borderRadius: 2,
                              borderColor: 'gray'
                            }}
                          >
                            <Card onClick={openProductImageEditModal}>
                              <CardMedia sx={{ width: '100%', height: 'auto', display: 'block' }}>
                                {productToEdit.image && (
                                  <Tooltip arrow placement="right" title="Edit Image">
                                    <CardMedia
                                      sx={{ py: 8 }}
                                      image={productToEdit.image.toString()}
                                    />
                                  </Tooltip>
                                )}
                              </CardMedia>
                            </Card>
                          </Box>
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
                              InputLabelProps={{ shrink: Boolean(values.name) }}
                              fullWidth
                              color="secondary"
                              sx={{ mx: 1, mb: 2 }}
                              name="name"
                              onChange={handleChange}
                              value={values.name}
                              label="Name"
                            />
                            <TextField
                              InputLabelProps={{
                                shrink: Boolean(values.price !== undefined && values.price !== null)
                              }}
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
                          InputLabelProps={{ shrink: Boolean(values.description) }}
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
                        InputLabelProps={{ shrink: Boolean(values.brand) }}
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="brand"
                        label="Brand"
                        onChange={handleChange}
                        value={values.brand}
                      />
                      <TextField
                        InputLabelProps={{ shrink: Boolean(values.model) }}
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
                        InputLabelProps={{ shrink: Boolean(values.category) }}
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="category"
                        label="Category"
                        onChange={handleChange}
                        value={values.category}
                      />
                      <TextField
                        InputLabelProps={{ shrink: Boolean(values.subCategory) }}
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
                        InputLabelProps={{ shrink: Boolean(values.color) }}
                        color="secondary"
                        sx={{ mx: 1, mb: 1 }}
                        name="color"
                        label="Color"
                        onChange={handleChange}
                        value={values.color}
                      />

                      <TextField
                        InputLabelProps={{
                          shrink: Boolean(values.inventory !== undefined && values.price !== null)
                        }}
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
                      <Button onClick={closeModal} sx={{ mx: 3 }} color="secondary">
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
          <CustomLinear show={_showLinear} />
        </CustomModal>
      )}
    </Fragment>
  )
}

export default EditProductModal

import { IControllerMethod } from 'src/interfaces/index'
import { productService } from 'src/services/product'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (!images || !Array.isArray(images)) {
        throw new Error()
      }

      const imageColors = await productService.getProductImageColor(images)
      return res.json(imageColors)
    } catch (error) {
      next(error)
    }
  }

  processAudio: IControllerMethod = async (req, res, next) => {
    try {
      const { files } = req

      if (!files || !Array.isArray(files) || !files.length) {
        throw new Error()
      }

      let product = await productService.extractProductInformation(files[0])
      if (!product) {
        product = ''
      }
      res.json({ product: JSON.parse(product) })
    } catch (error) {
      console.log(JSON.stringify(error))
      next(error)
    }
  }
}

export const controller = new Controller()

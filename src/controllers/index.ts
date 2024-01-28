import { BadRequestError } from 'src/errors/bad-request'
import { IControllerMethod } from 'src/interfaces/index'
import { productService } from 'src/services/product'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (!images || !Array.isArray(images)) {
        throw new BadRequestError('Images not provided')
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
        throw new BadRequestError('Audio not provided')
      }

      const product = await productService.extractProductInformation(files[0])
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

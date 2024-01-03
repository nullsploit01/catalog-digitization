import { IControllerMethod } from 'src/interfaces/index'
import { imageService } from 'src/services/image'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (!images || !Array.isArray(images)) {
        throw new Error()
      }

      const imageColors = await imageService.getImageColor(images)
      return res.json(imageColors)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

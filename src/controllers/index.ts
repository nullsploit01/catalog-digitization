import { IControllerMethod } from 'src/interfaces/index'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (Array.isArray(images)) {
        images.map((image) => image.filename)
      }
      res.json({ response: 'works!' })
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

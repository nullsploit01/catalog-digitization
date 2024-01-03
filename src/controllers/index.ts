import getColors from 'get-image-colors'

import { IControllerMethod } from 'src/interfaces/index'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      let imageColors: Record<string, string>[] = []

      if (Array.isArray(images)) {
        for (const image of images) {
          try {
            const colors = await getColors(image.path, { count: 1 })
            colors.map((color) => imageColors.push({ [image.originalname]: color.hex() }))
          } catch (err) {
            next(err)
          }
        }
      }

      return res.json(imageColors)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

import { IControllerMethod } from 'src/interfaces/index'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.body
      console.log(
        '🚀 ~ file: index.ts:7 ~ Controller ~ uploadImages:IControllerMethod= ~ images:',
        req.files
      )
      res.json({ response: 'works!' })
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

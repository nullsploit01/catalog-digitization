import { IProductImageColor } from 'src/models/product'

import getColors from 'get-image-colors'

class ProductService {
  getProductImageColor = async (images: Express.Multer.File[]) => {
    let imageColors: IProductImageColor[] = []

    for (const image of images) {
      const colors = await getColors(image.path, { count: 1 })
      colors.map((color) => imageColors.push({ name: image.originalname, color: color.hex() }))
    }

    return imageColors
  }
}

export const productService = new ProductService()

import getColors from 'get-image-colors'

class ImageService {
  getImageColor = async (images: Express.Multer.File[]) => {
    let imageColors: Record<string, string>[] = []

    for (const image of images) {
      const colors = await getColors(image.path, { count: 1 })
      colors.map((color) => imageColors.push({ [image.originalname]: color.hex() }))
    }

    return imageColors
  }
}

export const imageService = new ImageService()

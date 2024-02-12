import { openAiClient } from 'src/clients/openai'
import { BadRequestError } from 'src/errors/bad-request'
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

  extractProductInformation = async (audioFile: Express.Multer.File) => {
    const transcript = await openAiClient.whisper(audioFile)

    const message = `Analyse the following transcript and return values for given parameters. 
                    Response should be in json format with 
                          'name', 'price' as number, 'description', 'color', 'brand', 'model', 'category', 'subcategory', 'inventory' as number parameters
                    Only form json with keys in transcript, none of the parameters are required to be in json
                    transcript: ${transcript}`

    const response = await openAiClient.chatCompletions(message)

    if (!response || !response.content) {
      return null
    }

    try {
      return JSON.parse(response.content)
    } catch (err) {
      throw new BadRequestError('Something went wrong while processing audio, please try again')
    }
  }
}

export const productService = new ProductService()

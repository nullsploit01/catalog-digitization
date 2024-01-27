import { openAiClient } from 'src/clients/openai'
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

    const message = `Create a json object interface { 
                      name?: string 
                      price?: number 
                      description?: string 
                      color?: string
                      brand?: string 
                      model?: string 
                      category?: string 
                      subCategory?: string 
                      inventory?: number } for the transcript: ${transcript} only for keys provided in transcript`

    const response = await openAiClient.chatCompletions(message)

    if (!response || !response.content) {
      return null
    }

    return JSON.parse(response.content)
  }
}

export const productService = new ProductService()

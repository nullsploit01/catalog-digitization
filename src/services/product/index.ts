import { IProductImageColor } from 'src/models/product'

import speech from '@google-cloud/speech'
import fs from 'fs/promises'
import getColors from 'get-image-colors'

class ProductService {
  private client = new speech.SpeechClient()

  getProductImageColor = async (images: Express.Multer.File[]) => {
    let imageColors: IProductImageColor[] = []

    for (const image of images) {
      const colors = await getColors(image.path, { count: 1 })
      colors.map((color) => imageColors.push({ name: image.originalname, color: color.hex() }))
    }

    return imageColors
  }

  getAudioTranscript = async (audio: Express.Multer.File[]) => {
    const fileread = await fs.readFile(audio[0].path, { encoding: 'base64' })

    const config = {
      encoding: 'WEBM_OPUS' as any,
      languageCode: 'en-US'
    }

    const [response] = await this.client.recognize({ audio: { content: fileread }, config })
    return response
  }
}

export const productService = new ProductService()

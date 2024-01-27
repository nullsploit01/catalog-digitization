import { openAiClient } from 'src/clients/openai'
import { environment } from 'src/config/environment'
import { IControllerMethod } from 'src/interfaces/index'
import { productService } from 'src/services/product'

import axios from 'axios'
import FormData from 'form-data'
import fs from 'fs/promises'

class Controller {
  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (!images || !Array.isArray(images)) {
        throw new Error()
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
        throw new Error()
      }

      // const audioFile = await fs.readFile(files[0].path)
      // const formData = new FormData()
      // formData.append('file', audioFile, {
      //   filename: 'something.mp3',
      //   contentType: files[0].mimetype
      // })
      // formData.append('model', 'whisper-1')
      // formData.append('response_format', 'json')
      // const config = {
      //   headers: {
      //     'Content-Type': `multipart/form-data`,
      //     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      //   }
      // }
      // // Call the OpenAI Whisper API to transcribe the audio
      // const response = await axios.post(
      //   'https://api.openai.com/v1/audio/transcriptions',
      //   formData,
      //   config
      // )
      const transcription = await openAiClient.whisper(files[0])
      res.json({ transcription })
    } catch (error) {
      console.log(JSON.stringify(error))
      next(error)
    }
  }
}

export const controller = new Controller()

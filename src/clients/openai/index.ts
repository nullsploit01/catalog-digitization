import { axiosClient } from 'src/clients/axios'
import { environment } from 'src/config/environment'

import FormData from 'form-data'
import fs from 'fs/promises'

class OpenAiClient {
  private httpClient

  constructor() {
    this.httpClient = axiosClient('https://api.openai.com/v1', {
      Authorization: `Bearer ${environment.OPENAI_API_KEY}`
    })
  }

  whisper = async (audioFile: Express.Multer.File) => {
    const formData = new FormData()
    const filedata = await fs.readFile(audioFile.path)

    formData.append('file', filedata, {
      filename: 'audio.mp3',
      contentType: audioFile.mimetype
    })

    formData.append('model', 'whisper-1')
    formData.append('response_format', 'json')

    const response = await this.httpClient.post('/audio/transcriptions', formData)
    return response.data.text
  }
}

export const openAiClient = new OpenAiClient()

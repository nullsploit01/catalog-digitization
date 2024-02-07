import fs from 'fs'
import OpenAI, { toFile } from 'openai'

class OpenAiClient {
  private openAIInstance = new OpenAI()

  whisper = async (audioFile: Express.Multer.File) => {
    const audioFileData = await toFile(fs.createReadStream(audioFile.path))

    const response = await this.openAIInstance.audio.transcriptions.create({
      file: audioFileData,
      model: 'whisper-1'
    })

    return response.text
  }

  chatCompletions = async (message: string) => {
    const completions = await this.openAIInstance.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: message
        }
      ],
      model: 'gpt-3.5-turbo',
      top_p: 0.0000000000001
    })

    return completions.choices[0].message
  }
}

export const openAiClient = new OpenAiClient()

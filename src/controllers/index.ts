import { IControllerMethod } from 'src/interfaces/index'
import { imageService } from 'src/services/image'

import speech from '@google-cloud/speech'

class Controller {
  client = new speech.SpeechClient()

  uploadImages: IControllerMethod = async (req, res, next) => {
    try {
      const images = req.files
      if (!images || !Array.isArray(images)) {
        throw new Error()
      }

      const imageColors = await imageService.getImageColor(images)
      return res.json(imageColors)
    } catch (error) {
      next(error)
    }
  }

  processAudio: IControllerMethod = async (req, res, next) => {
    try {
      const gcsUri = 'gs://cloud-samples-data/speech/brooklyn_bridge.raw'

      // The audio file's encoding, sample rate in hertz, and BCP-47 language code
      const audio = {
        uri: gcsUri
      }
      const config = {
        encoding: 'LINEAR16' as any,
        sampleRateHertz: 16000,
        languageCode: 'en-US'
      }
      const request = {
        audio: audio,
        config: config
      }

      // Detects speech in the audio file
      const [response] = await this.client.recognize(request)
      // if (response && response.results) {
      //   const transcription = response.results
      //     .map((result) => {
      //       if (result && result.alternatives) {
      //         result.alternatives[0].transcript
      //       }
      //     })
      //     .join('\n')
      //   console.log(`Transcription: ${transcription}`)
      // }

      res.json(response.results)
    } catch (error) {
      next(error)
    }
  }
}

export const controller = new Controller()

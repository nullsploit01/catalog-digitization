import { axiosClient } from 'src/clients/axios'

class ImageService {
  uploadIMages(images: FileList) {
    return axiosClient.post('/images', images)
  }
}

export const imageService = new ImageService()

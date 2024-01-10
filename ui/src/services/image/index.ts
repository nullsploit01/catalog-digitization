import { axiosClient } from 'src/clients/axios'
import { IProductImageColor } from 'src/models/product'

class ImageService {
  uploadIMages(images: FileList) {
    return axiosClient.post<IProductImageColor[]>('/images', images)
  }
}

export const imageService = new ImageService()

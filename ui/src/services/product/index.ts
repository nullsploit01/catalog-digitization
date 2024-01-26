import { axiosClient } from 'src/clients/axios'
import { IProductImageColor } from 'src/models/product'

class ProductService {
  uploadProductIMages(images: FileList) {
    return axiosClient.post<IProductImageColor[]>('/images', images)
  }

  uploadVoiceInput(audio: any) {
    return axiosClient.post('/audio', audio)
  }
}

export const productService = new ProductService()

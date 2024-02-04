import { axiosClient } from 'src/clients/axios'
import { IProduct, IProductImageColor } from 'src/models/product'

class ProductService {
  uploadProductImages = async (images: FormData) => {
    return axiosClient.post<IProductImageColor[]>('/images', images)
  }

  uploadVoiceInput = async (audio: any) => {
    return axiosClient.post<IProduct>('/audio', audio)
  }
}

export const productService = new ProductService()

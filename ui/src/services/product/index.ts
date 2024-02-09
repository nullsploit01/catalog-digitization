import { axiosClient } from 'src/clients/axios'
import { IProduct, IProductImageColor } from 'src/models/product'

class ProductService {
  ping = async () => {
    return await axiosClient.get('/ping')
  }
  uploadProductImages = async (images: FormData | FileList) => {
    return await axiosClient.post<IProductImageColor[]>('/images', images)
  }

  uploadVoiceInput = async (audio: any) => {
    return await axiosClient.post<IProduct>('/audio', audio)
  }
}

export const productService = new ProductService()

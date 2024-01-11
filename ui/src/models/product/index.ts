export interface IProduct {
  id?: string
  name?: string
  price?: number
  description?: string
  image?: string | ArrayBuffer
  color?: string
  brand?: string
  model?: string
  category?: string
  subCategory?: string
  inventory?: number
}

export interface IProductImageColor {
  name: string
  color: string
}

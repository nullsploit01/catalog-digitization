import axios, { RawAxiosRequestHeaders } from 'axios'

export const axiosClient = (baseURL: string, headers: RawAxiosRequestHeaders = {}) => {
  return axios.create({ baseURL, headers })
}

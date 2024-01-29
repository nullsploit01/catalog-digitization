import { useNotification } from 'src/hooks/notification'

import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios'
import { FC, ReactNode, useEffect, useState } from 'react'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

interface IAxiosInterceptorProps {
  children: ReactNode
}

const AxiosInterceptor: FC<IAxiosInterceptorProps> = ({ children }) => {
  const { showNotification } = useNotification()
  const [_isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const responseInterceptor = (response: AxiosResponse) => {
      return response
    }

    const getDescription = (data: any) => {
      return typeof data?.error === 'string' ? data.error : 'Something went wrong! Please try again'
    }

    const errorInterceptor = (error: AxiosError) => {
      switch (error.response?.status) {
        case HttpStatusCode.BadRequest: {
          showNotification(getDescription(error.response?.data), 'error')
          break
        }

        case HttpStatusCode.NotFound: {
          showNotification(getDescription(error.response?.data), 'error')
          break
        }

        case HttpStatusCode.InternalServerError: {
          showNotification(getDescription(error.response?.data), 'error')
          break
        }

        default: {
          showNotification(getDescription(error.response?.data), 'error')
          break
        }
      }

      return Promise.reject(error)
    }

    setIsMounted(true)
    const interceptor = axiosClient.interceptors.response.use(responseInterceptor, errorInterceptor)

    return () => axiosClient.interceptors.response.eject(interceptor)
  }, [])

  return _isMounted && children
}

export { axiosClient, AxiosInterceptor }

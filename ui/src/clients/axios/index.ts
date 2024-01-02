import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SOME_KEY
})

export { axiosClient }

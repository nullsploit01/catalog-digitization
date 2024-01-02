import { router } from './router'
import express from 'express'

const server = express()
const PORT = process.env.PORT || 8080

server.use(router)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

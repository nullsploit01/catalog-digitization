import { router } from 'src/router'

import cors from 'cors'
import express from 'express'

const server = express()
const PORT = process.env.PORT || 8080

server.use(cors())
server.use(express.json())

server.use(router)

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

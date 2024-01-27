import { environment } from 'src/config/environment'
import { router } from 'src/router'

import cors from 'cors'
import express from 'express'

const server = express()

server.use(cors({ origin: environment.ALLOWED_ORIGIN }))
server.use(express.json())

server.use(router)

server.listen(environment.port, () => {
  console.log(`Server listening on port ${environment.port}`)
})

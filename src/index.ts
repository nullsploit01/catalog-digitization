import { environment } from 'src/config/environment'
import { errorLogger, httpLogger, logger } from 'src/config/logger'
import { NotFoundError } from 'src/errors/not-found'
import { errorHandler } from 'src/middlewares/error-handler'
import { router } from 'src/router'

import cors from 'cors'
import express from 'express'

const server = express()

server.use(httpLogger)
server.use(errorLogger)
server.use(cors({ origin: environment.ALLOWED_ORIGIN }))
server.use(express.json())

server.use(router)

server.use('*', () => {
  throw new NotFoundError()
})

server.use(errorHandler)

server.listen(environment.PORT, () => {
  logger.info(
    `Server is running on http://localhost:${environment.PORT}/ in ${environment.NODE_ENV} mode`
  )
})

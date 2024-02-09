import { environment } from 'src/config/environment'
import { errorLogger, httpLogger, logger } from 'src/config/logger'
import { BadRequestError } from 'src/errors/bad-request'
import { NotFoundError } from 'src/errors/not-found'
import { errorHandler } from 'src/middlewares/error-handler'
import { router } from 'src/router'

import cors from 'cors'
import express from 'express'

const server = express()

server.use(
  cors({
    origin(requestOrigin, callback) {
      if (!requestOrigin || requestOrigin !== environment.ALLOWED_ORIGIN) {
        const errorMsg =
          'The CORS policy for this site does not allow access from the specified Origin.'
        return callback(new BadRequestError(errorMsg), false)
      }
      return callback(null, true)
    }
  })
)

server.use(httpLogger)
server.use(errorLogger)
server.use(express.json())

server.use(router)

server.use('*', () => {
  throw new NotFoundError()
})

server.listen(environment.PORT, () => {
  logger.info(
    `Server is running on http://localhost:${environment.PORT}/ in ${environment.NODE_ENV} mode`
  )
})

server.use(errorHandler)

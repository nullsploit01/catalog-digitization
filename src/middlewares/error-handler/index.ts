import { CustomError } from 'src/errors/custom'
import { IErrorHandlerMiddleware } from 'src/interfaces'

export const errorHandler: IErrorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeErrors())
  }

  return res.status(500).json({
    error: 'Something Went Wrong',
    code: 'INTERNAL_SERVER_ERROR'
  })
}

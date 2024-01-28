import { CustomError } from '../custom'

export class NotFoundError extends CustomError {
  statusCode = 404

  constructor(public message = 'Resource Not Found') {
    super(message)
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return { error: this.message, code: 'NOT_FOUND' }
  }
}

import { CustomError } from '../custom'

export class RateLimitExceededError extends CustomError {
  statusCode = 429

  constructor(public message: string = 'Rate Limit Exceeded') {
    super(message)
    Object.setPrototypeOf(this, RateLimitExceededError.prototype)
  }

  serializeErrors() {
    return { error: this.message, code: 'RATE_LIMIT_EXCEEDED' }
  }
}

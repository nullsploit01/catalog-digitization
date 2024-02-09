import { BadRequestError } from 'src/errors/bad-request'
import { RateLimitExceededError } from 'src/errors/rate-limit-exceeded'
import { IRateLimiterMiddleware } from 'src/interfaces'

let quota = {
  access_limit: 100,
  exhausted_requests: 0,
  last_reset_timestamp: Date.now()
}

const shouldResetQuota = () => {
  const currentTimestampInSeconds = Math.floor(Date.now() / 1000)
  const lastResetTimestampInSeconds = Math.floor(quota.last_reset_timestamp / 1000)
  const timeDifferenceInSeconds = currentTimestampInSeconds - lastResetTimestampInSeconds
  return timeDifferenceInSeconds > 24 * 60 * 60 // One Day
}

export const rateLimiter: IRateLimiterMiddleware = (req, res, next) => {
  if (shouldResetQuota()) {
    quota.exhausted_requests = 0
    quota.last_reset_timestamp = Date.now()
  }

  if (quota.exhausted_requests >= quota.access_limit) {
    throw new RateLimitExceededError('Request Quota has been exhausted. Try again tomorrow!')
  }

  quota.exhausted_requests += 1

  next()
}

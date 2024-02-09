import { uploadFile } from 'src/config/multer'
import { controller } from 'src/controllers'
import { rateLimiter } from 'src/middlewares/rate-limiter'

import { Router } from 'express'

const router = Router()

router.get('/ping', controller.ping)

router.post('/images', uploadFile.any(), controller.uploadImages)

router.post('/audio', rateLimiter, uploadFile.any(), controller.processAudio)

export { router }

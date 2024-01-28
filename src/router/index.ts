import { uploadFile } from 'src/config/multer'
import { controller } from 'src/controllers/index'

import { Router } from 'express'

const router = Router()

router.post('/images', uploadFile.any(), controller.uploadImages)

router.post('/audio', uploadFile.any(), controller.processAudio)

export { router }

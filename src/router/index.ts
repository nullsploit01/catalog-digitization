import { upload } from 'src/config/multer'
import { controller } from 'src/controllers/index'

import { Router } from 'express'

const router = Router()

router.post('/images', upload.any(), controller.uploadImages)

router.post('/audio', upload.any(), controller.processAudio)

export { router }

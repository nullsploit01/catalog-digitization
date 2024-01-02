import { Router } from 'express'

import { upload } from 'src/config/multer'
import { controller } from 'src/controllers/index'

const router = Router()

router.post('/images', upload.any(), controller.uploadImages)

export { router }

import { Router } from 'express'

import { controller } from 'src/controllers/index'

const router = Router()

router.post('/images', controller.uploadImages)

export { router }

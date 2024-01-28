import { logger } from '../logger'
import fs from 'fs'
import mime from 'mime-types'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp')
  },
  filename: (req, file, cb) => {
    const extension =
      mime.extension(file.mimetype) === 'weba' ? 'mp3' : mime.extension(file.mimetype)
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '.' + extension
    cb(null, uniqueSuffix)
  }
})

export const uploadFile = multer({ storage })

export const removeFiles = (files: Express.Multer.File[]) => {
  files.map(({ path }) => {
    fs.unlink(path, (err) => {
      if (err) {
        logger.error(`Error deleting file: ${err}`)
      }
    })
  })
}

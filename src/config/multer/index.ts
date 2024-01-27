import mime from 'mime-types'
import multer from 'multer'
import path from 'path'

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

export const upload = multer({ storage })

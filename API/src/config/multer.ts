import multer from 'multer'
import { resolve } from 'path'

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'))
    },
    filename: (req, file, cb) => {
      if (file.mimetype.split('/')[0] !== 'image') {
        return cb(null, 'invalid_file')
      }
      const fileNameForSaving = `avatar_user_${file.fieldname}_${Date.now()}.${
        file.mimetype.split('/')[1]
      }`
      return cb(null, fileNameForSaving)
    },
  }),
}

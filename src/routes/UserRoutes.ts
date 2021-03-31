import { Router } from 'express'
import multer from 'multer'
import UserController from '../controllers/UserController'
import multerConfig from '../config/multer'
import auth from '../middlewares/auth'

const upload = multer(multerConfig)

const UserRoutes = Router()

UserRoutes.get('/:userName', UserController.show)
UserRoutes.post('/', UserController.create)
UserRoutes.post('/session', UserController.session)
UserRoutes.put('/', auth, upload.single('avatar'), UserController.update)

export default UserRoutes

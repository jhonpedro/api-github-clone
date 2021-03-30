import { Router } from 'express'
import UserController from '../controllers/UserController'

const UserRoutes = Router()

UserRoutes.get('/:userName', UserController.show)
UserRoutes.post('/', UserController.create)
UserRoutes.post('/session', UserController.session)

export default UserRoutes

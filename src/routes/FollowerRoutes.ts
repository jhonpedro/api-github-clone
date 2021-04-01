import { Router } from 'express'
import FollowerController from '../controllers/FollowerController'
import auth from '../middlewares/auth'

const FollowerRoutes = Router()

FollowerRoutes.post('/follow/:username', auth, FollowerController.follow)
FollowerRoutes.post('/unfollow/:username', auth, FollowerController.unfollow)

export default FollowerRoutes

import { Router } from 'express'
import FollowerController from '../controllers/FollowerController'
import auth from '../middlewares/auth'

const FollowerRoutes = Router()

FollowerRoutes.get('/:userName/follows', FollowerController.indexFollowers)
FollowerRoutes.get('/:userName/following', FollowerController.indexFollowing)
FollowerRoutes.post('/follow/:username', auth, FollowerController.follow)
FollowerRoutes.post('/unfollow/:username', auth, FollowerController.unfollow)

export default FollowerRoutes

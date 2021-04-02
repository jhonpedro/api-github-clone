import { Router } from 'express'
import RepositoryStarsController from '../controllers/RepositoryStarsController'
import auth from '../middlewares/auth'

const RepositoryStarsRoutes = Router()

RepositoryStarsRoutes.post(
  '/:userName/:repositorySlug',
  auth,
  RepositoryStarsController.star
)
RepositoryStarsRoutes.delete(
  '/:userName/:repositorySlug',
  auth,
  RepositoryStarsController.unstar
)

export default RepositoryStarsRoutes

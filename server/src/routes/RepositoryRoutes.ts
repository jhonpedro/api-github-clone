import { Router } from 'express'
import RepositoryController from '../controllers/RepositoryController'
import auth from '../middlewares/auth'
import ensureNameAndEmail from '../middlewares/ensureNameAndEmail'

const RepositoryRoutes = Router()

RepositoryRoutes.get('/:userName', RepositoryController.index)
RepositoryRoutes.get('/:userName/:repositorySlug', RepositoryController.show)
RepositoryRoutes.post(
  '/',
  auth,
  ensureNameAndEmail,
  RepositoryController.create
)
RepositoryRoutes.put('/', auth, RepositoryController.update)
RepositoryRoutes.delete(
  '/:slug',
  auth,
  ensureNameAndEmail,
  RepositoryController.delete
)

export default RepositoryRoutes

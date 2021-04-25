import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { resolve } from 'path'
import cors from 'cors'
import UserRoutes from './routes/UserRoutes'
import FollowerRoutes from './routes/FollowerRoutes'
import ErrorHandlerMiddleware from './utils/errors/ErrorHandlerMiddleware'
import RepositoryRoutes from './routes/RepositoryRoutes'
import RepositoryStarsRoutes from './routes/RepositoryStarsRoutes'

class App {
  server = express()

  constructor() {
    this.middlewares()
    this.routes()
    this.errorMiddlewares()
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(express.json())
    this.server.use(
      '/images',
      express.static(resolve(__dirname, '..', 'uploads', 'images'))
    )
  }

  errorMiddlewares() {
    this.server.use(ErrorHandlerMiddleware)
  }

  routes() {
    this.server.use('/users', UserRoutes)
    this.server.use('/followers', FollowerRoutes)
    this.server.use('/repositories', RepositoryRoutes)
    this.server.use('/stars', RepositoryStarsRoutes)
  }
}

export default new App().server

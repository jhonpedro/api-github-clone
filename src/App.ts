import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { resolve } from 'path'
import UserRoutes from './routes/UserRoutes'
import FollowerRoutes from './routes/FollowerRoutes'
import ErrorHandlerMiddleware from './utils/errors/ErrorHandlerMiddleware'

class App {
  server = express()

  constructor() {
    this.routes()
    this.middlewares()
  }

  middlewares() {
    this.server.use(
      '/images',
      express.static(resolve(__dirname, '..', 'uploads', 'images'))
    )
    this.server.use(express.json())
    this.server.use(ErrorHandlerMiddleware)
  }

  routes() {
    this.server.use('/users', UserRoutes)
    this.server.use('/followers', FollowerRoutes)
  }
}

export default new App().server

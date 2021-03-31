import express from 'express'
import { resolve } from 'path'
import UserRoutes from './routes/UserRoutes'
import ErrorHandlerMiddleware from './utils/errors/ErrorHandlerMiddleware'

class App {
  server = express()

  constructor() {
    this.middlewares()
    this.routes()
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
  }
}

export default new App().server

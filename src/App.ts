import express from 'express'
import UserRoutes from './routes/UserRoutes'
import ErrorHandlerMiddleware from './utils/errors/ErrorHandlerMiddleware'

class App {
  server = express()

  constructor() {
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(ErrorHandlerMiddleware)
  }

  routes() {
    this.server.use('/users', UserRoutes)
  }
}

export default new App().server

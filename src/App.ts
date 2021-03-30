import express from 'express'

class App {
  server = express()

  constructor() {
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
  }

  routes() {
    this.server.get('/', (req, res) => {
      res.json({ message: 'Ok' })
    })
  }
}

export default new App().server

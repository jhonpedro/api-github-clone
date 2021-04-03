import App from './App'

import Connection from './database/database'

App.listen('8080', async () => {
  // eslint-disable-next-line

  // Try to connect to database five times
  let succesToConnect = false
  for (let i = 0; i < 5; i += 1) {
    try {
      console.log(`Try ${i + 1} to connect`)
      await Connection.authenticate()
      Connection.sync({ force: true })
      console.log('connected to db')
      succesToConnect = true
      break
    } catch {
      await new Promise((resolve) => {
        setTimeout(resolve, 3000)
      })
      continue
    }
  }
  if (!succesToConnect) {
    throw Error('Error to connect to database')
  }
  console.log('Server is running on 8080')
})

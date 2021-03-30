import App from './App'

import Connection from './database/database'

App.listen('8080', async () => {
  // eslint-disable-next-line
  console.log('Server is running on 8080')

  try {
    await Connection.authenticate()
    Connection.sync({ force: true })
  } catch (err) {
    // eslint-disable-next-line
    console.log(err)
  }
})

import App from './App'

import Connection from './database/database'

App.listen('8080', async () => {
  // eslint-disable-next-line
  console.log('Server is running on 8080')

  await Connection.authenticate()
  Connection.sync({ force: true })
})

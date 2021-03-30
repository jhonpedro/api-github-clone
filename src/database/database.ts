import { Sequelize } from 'sequelize-typescript'
import { resolve } from 'path'

require('dotenv/config')

const connection = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    // eslint-disable-next-line
    models: [resolve(__dirname, '..', 'models')],
    timezone: '-03:00',
  }
)

export default connection

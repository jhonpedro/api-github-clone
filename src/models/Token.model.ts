import {
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript'
import User from './User.model'

export interface TokenI {
  userid: number
}

@Table({
  tableName: 'tokens',
  createdAt: true,
  updatedAt: false,
})
class Token extends Model implements TokenI {
  @ForeignKey(() => User)
  @NotEmpty
  @Column
  @Column
  userid!: number
}

export default Token

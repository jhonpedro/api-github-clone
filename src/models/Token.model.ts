import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
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
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @ForeignKey(() => User)
  @NotEmpty
  @Column
  @Column
  userid!: number
}

export default Token

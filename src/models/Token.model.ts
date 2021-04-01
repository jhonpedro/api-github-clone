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
  timestamps: true,
  updatedAt: false,
})
class Token extends Model implements TokenI {
  @ForeignKey(() => User)
  @NotEmpty
  @Column
  userid!: number
}

export default Token

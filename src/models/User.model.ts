import {
  AllowNull,
  AutoIncrement,
  Column,
  Default,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript'
import { TEXT } from 'sequelize'

export interface UserI {
  id: number
  name: string
  email: string
  localization: string
  avatar: string
  username: string
  bio: string
}

@Table({
  tableName: 'users',
  timestamps: true,
})
class User extends Model implements UserI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @AllowNull(true)
  @Default('')
  @Column
  name!: string

  @AllowNull(true)
  @Default('')
  @Column
  email!: string

  @AllowNull(true)
  @Default('')
  @Column
  localization!: string

  @AllowNull(true)
  @Default('')
  @Column
  avatar!: string

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  username!: string

  @AllowNull(true)
  @Default('')
  @Column(TEXT)
  bio!: string
}

export default User

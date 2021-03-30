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
export default class User extends Model implements UserI {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number

  @AllowNull(true)
  @Column
  @Default('')
  name!: string

  @AllowNull(true)
  @Column
  @Default('')
  email!: string

  @AllowNull(true)
  @Column
  @Default('')
  localization!: string

  @AllowNull(true)
  @Column
  @Default('')
  avatar!: string

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  username!: string

  @AllowNull(true)
  @Column
  @Default('')
  bio!: string
}

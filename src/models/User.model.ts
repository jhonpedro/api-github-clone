import {
  AllowNull,
  AutoIncrement,
  Column,
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

  @AllowNull(false)
  @NotEmpty
  @Column
  name!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  email!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  localization!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  avatar!: string

  @AllowNull(false)
  @NotEmpty
  @Unique
  @Column
  username!: string

  @AllowNull(false)
  @NotEmpty
  @Column
  bio!: string
}

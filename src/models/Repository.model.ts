import {
  AllowNull,
  Column,
  Default,
  ForeignKey,
  Min,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript'
import User from './User.model'

export interface RepositoryI {
  userid: number
  name: string
  description: string
  ownerusername: string
  ispublic: boolean
  slug: string
}

@Table({
  tableName: 'repositories',
  timestamps: true,
})
class Repository extends Model implements RepositoryI {
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userid: number

  @AllowNull(false)
  @NotEmpty
  @Min(3)
  @Column
  name: string

  @Default('')
  @Column
  description: string

  @AllowNull(false)
  @Default('true')
  @NotEmpty
  @Column
  ispublic!: boolean

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column({
    references: { model: 'users', key: 'username' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  ownerusername: string

  @AllowNull(false)
  @Column
  slug: string
}

export default Repository

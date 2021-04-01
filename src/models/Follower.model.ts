import {
  AllowNull,
  Column,
  ForeignKey,
  Model,
  NotEmpty,
  Table,
} from 'sequelize-typescript'
import User from './User.model'

export interface FollowerI {
  userid: number
  followsuserid: number
}

@Table({
  tableName: 'followers',
  timestamps: true,
  updatedAt: false,
})
class Follower extends Model implements FollowerI {
  @ForeignKey(() => User)
  @AllowNull(false)
  @NotEmpty
  @Column
  userid!: number

  @ForeignKey(() => User)
  @AllowNull(false)
  @NotEmpty
  @Column
  followsuserid!: number
}

export default Follower

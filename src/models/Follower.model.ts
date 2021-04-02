import { AllowNull, Column, Model, NotEmpty, Table } from 'sequelize-typescript'

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
  @AllowNull(false)
  @NotEmpty
  @Column({
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userid!: number

  @AllowNull(false)
  @NotEmpty
  @Column({
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  followsuserid!: number
}

export default Follower

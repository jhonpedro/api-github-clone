import { Column, Model, NotEmpty, Table } from 'sequelize-typescript'

export interface TokenI {
  userid: number
}

@Table({
  tableName: 'tokens',
  timestamps: true,
  updatedAt: false,
})
class Token extends Model implements TokenI {
  @NotEmpty
  @Column({
    references: { model: 'users', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userid!: number
}

export default Token

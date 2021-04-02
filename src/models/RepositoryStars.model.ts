import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import User from './User.model'

interface RepositoryStarsI {
  repositoryid: number
  usernamewhostarred: string
}

@Table({
  tableName: 'repositoriesstars',
  timestamps: true,
  updatedAt: false,
})
class RepositoryStars extends Model implements RepositoryStarsI {
  @Column({
    references: { model: 'repositories', key: 'id' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  repositoryid: number

  @ForeignKey(() => User)
  @Column({
    references: { model: 'users', key: 'username' },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  usernamewhostarred: string
}

export default RepositoryStars

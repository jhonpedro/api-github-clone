import { Request, Response } from 'express'
import slugify from 'slugify'
import connection from '../database/database'
import Repository from '../models/Repository.model'
import RepositoryStars from '../models/RepositoryStars.model'
import User from '../models/User.model'
import AppError from '../utils/errors/AppError'

export default {
  async create(req: Request, res: Response) {
    const { name, description, isPublic } = req.body

    const user = await User.findByPk(req.user.id, {
      attributes: ['name', 'username'],
    })

    const repositoryAlreadyExists = await Repository.findOne({
      where: { name, ownerusername: user.username },
    })

    if (repositoryAlreadyExists) {
      throw new AppError('an repository with this name already exists', 401)
    }

    const newRepository = await Repository.create({
      userid: req.user.id,
      name,
      description,
      public: Boolean(isPublic),
      ownerusername: user.username,
      slug: slugify(name),
    })

    const repositoryStarsCount = await RepositoryStars.count({
      where: { repositoryid: newRepository.id },
    })

    return res.json({
      ...newRepository.get(),
      slug: slugify(`${user.name.toLowerCase()} ${newRepository.slug}`),
      stars: repositoryStarsCount,
    })
  },

  async show(req: Request, res: Response) {
    const { userName, repositorySlug } = req.params

    if (!userName || !repositorySlug) {
      throw new AppError('missing params for repository retriving', 400)
    }

    const trueRepositorySlug = repositorySlug.slice(
      repositorySlug.indexOf('-') + 1
    )

    const repository = await Repository.findOne({
      where: { slug: trueRepositorySlug, ownerusername: userName },
    })

    const user = await User.findByPk(repository.userid, {
      attributes: ['name'],
    })

    const repositoryStarsCount = await RepositoryStars.count({
      where: { repositoryid: repository.id },
    })

    return res.json({
      ...repository.get(),
      slug: slugify(`${user.name.toLowerCase()} ${repository.slug}`),
      stars: repositoryStarsCount,
    })
  },

  async update(req: Request, res: Response) {
    const { id, name, description, isPublic } = req.body

    const user = await User.findByPk(req.user.id, { attributes: ['name'] })

    const updatedRepository = await Repository.update(
      {
        name,
        description,
        ispublic: isPublic,
        slug: slugify(name),
      },
      { where: { id }, returning: ['*'] }
    )

    updatedRepository[1][0].slug = slugify(
      `${user.name.toLowerCase()} ${updatedRepository[1][0].slug}`
    )

    const repositoryStarsCount = await RepositoryStars.count({
      where: { repositoryid: id },
    })

    return res.json({
      ...updatedRepository[1][0].get(),
      stars: repositoryStarsCount,
    })
  },

  async index(req: Request, res: Response) {
    const { userName } = req.params

    const user = await User.findOne({
      where: { username: userName },
      attributes: ['name'],
    })

    const repositories = await connection.query(
      `SELECT *, (SELECT COUNT("repositoriesstars"."id") as stars FROM repositoriesstars WHERE "repositoriesstars"."repositoryid" = "repositories"."id") FROM "repositories" WHERE "repositories"."ownerusername" = :username`,
      { replacements: { username: userName } }
    )

    if (!repositories) {
      if (!user) {
        throw new AppError('this user dont have this repository', 400)
      }
    }

    for (let i = 0; i < repositories[0].length; i += 1) {
      // @ts-ignore
      repositories[0][i].slug = slugify(
        // @ts-ignore
        `${user.name.toLowerCase()} ${repositories[0][i].slug}`
      )
    }

    return res.json(repositories[0])
  },

  async delete(req: Request, res: Response) {
    const { slug } = req.params

    const wasDeleted = await Repository.destroy({
      where: { slug, userid: req.user.id },
    })

    if (wasDeleted) {
      return res.json(Boolean(wasDeleted))
    }

    throw new AppError('there was a problem deleting the repository')
  },
}

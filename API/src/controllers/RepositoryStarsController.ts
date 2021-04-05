import { Request, Response } from 'express'
import slugify from 'slugify'
import Repository from '../models/Repository.model'
import RepositoryStars from '../models/RepositoryStars.model'
import User from '../models/User.model'
import AppError from '../utils/errors/AppError'

export default {
  async star(req: Request, res: Response) {
    const userName = req.params.userName as string
    const repositorySlug = req.params.repositorySlug as string

    const userWhoStarred = await User.findByPk(req.user.id, {
      attributes: ['username', 'name'],
    })

    const trueRepositorySlug = repositorySlug.replace(
      `${slugify(userWhoStarred.name.toLocaleLowerCase())}-`,
      ''
    )

    const repository = await Repository.findOne({
      where: { ownerusername: userName, slug: trueRepositorySlug },
      attributes: ['id', 'ispublic'],
    })

    if (!repository) {
      throw new AppError('no repository found for this slug and username', 400)
    }

    if (!repository.ispublic) {
      throw new AppError('this repository is private', 403)
    }

    const newRepositoryStar = await RepositoryStars.create({
      repositoryid: repository.id,
      usernamewhostarred: userWhoStarred.username,
    })

    res.status(201).json({ ...newRepositoryStar.get() })
  },
  async unstar(req: Request, res: Response) {
    const userName = req.params.userName as string
    const repositorySlug = req.params.repositorySlug as string

    const userWhoStarred = await User.findByPk(req.user.id, {
      attributes: ['username'],
    })

    const trueRepositorySlug = repositorySlug.slice(
      repositorySlug.indexOf('-') + 1
    )

    const repository = await Repository.findOne({
      where: { ownerusername: userName, slug: trueRepositorySlug },
      attributes: ['id', 'ispublic'],
    })

    if (!repository) {
      throw new AppError('no repository found for this slug and username', 400)
    }

    if (!repository.ispublic) {
      throw new AppError('this repository is private', 403)
    }

    const isUserFollowingThisRepository = await RepositoryStars.findOne({
      where: {
        repositoryid: repository.id,
        usernamewhostarred: (await userWhoStarred).username,
      },
    })

    if (isUserFollowingThisRepository) {
      isUserFollowingThisRepository.destroy()
      res.sendStatus(200)
    }

    throw new AppError('user dont follows this repository', 403)
  },
}

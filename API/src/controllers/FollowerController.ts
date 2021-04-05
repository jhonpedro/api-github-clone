import { Request, Response } from 'express'
import connection from '../database/database'
import Follower from '../models/Follower.model'
import User from '../models/User.model'
import AppError from '../utils/errors/AppError'

export default {
  async follow(req: Request, res: Response) {
    const { username } = req.params

    const userToFollowExists = await User.findOne({ where: { username } })
    if (!userToFollowExists) {
      throw new AppError('user to follow does not exists', 401)
    }

    if (req.user.id === userToFollowExists.id) {
      throw new AppError('you cant follow yourself', 401)
    }

    const isUserAlreadyFollowing = await Follower.findOne({
      where: {
        userid: req.user.id,
        followsuserid: userToFollowExists.id,
      },
    })

    if (isUserAlreadyFollowing) {
      throw new AppError('you cant follow the same person twice', 403)
    }

    await Follower.create({
      userid: req.user.id,
      followsuserid: userToFollowExists.id,
    })

    return res.sendStatus(201)
  },
  async unfollow(req: Request, res: Response) {
    const { username } = req.params

    const userNameExists = await User.findOne({ where: { username } })

    if (!userNameExists) {
      throw new AppError('username not found for unfollowing', 404)
    }

    const deletedFollow = await Follower.destroy({
      where: { userid: req.user.id, followsuserid: userNameExists.id },
    })

    if (deletedFollow > 0) {
      return res.sendStatus(200)
    }
    throw new AppError('unable to unfollow', 500)
  },

  async indexFollowers(req: Request, res: Response) {
    const { userName } = req.params

    const user = await User.findOne({
      where: { username: userName },
      attributes: ['id'],
    })

    if (!user) {
      throw new AppError('this user does not exists', 400)
    }

    const followers = await connection.query(
      'SELECT * FROM "users" where "users"."id" IN (SELECT "userid" FROM "followers" where "followsuserid" = :userid)',
      { replacements: { userid: user.id } }
    )

    return res.json(followers[0])
  },

  async indexFollowing(req: Request, res: Response) {
    const { userName } = req.params

    const user = await User.findOne({
      where: { username: userName },
      attributes: ['id'],
    })

    if (!user) {
      throw new AppError('this user does not exists', 400)
    }

    const followers = await connection.query(
      'SELECT * FROM "users" WHERE "users"."id" IN (SELECT "followsuserid" FROM "followers" WHERE "userid" = :userid)',
      { replacements: { userid: user.id } }
    )

    return res.json(followers[0])
  },
}

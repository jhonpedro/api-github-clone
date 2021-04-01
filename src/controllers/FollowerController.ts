import { Request, Response } from 'express'
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
      // return res.status(401).json({ message: 'you cant follow yourself' })
      throw new AppError('you cant follow yourself', 401)
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
}

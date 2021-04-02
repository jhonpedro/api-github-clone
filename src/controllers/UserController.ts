import { Request, Response } from 'express'
import JWT from 'jsonwebtoken'
import Follower from '../models/Follower.model'
import Token from '../models/Token.model'
import User, { UserI } from '../models/User.model'
import AppError from '../utils/errors/AppError'

interface UserWithFollowersAndFollowing extends UserI {
  followersCount: number
  followingCount: number
}

export default {
  async show(req: Request, res: Response) {
    const { userName } = req.params

    if (!userName) {
      throw new AppError('no username sended', 404)
    }

    const user = await User.findOne({ where: { username: userName } })

    if (!user) {
      throw new AppError(`no user founded with username ${userName}`, 404)
    }

    const followersCount = await Follower.count({
      where: { followsuserid: user.id },
    })

    const followingCount = await Follower.count({
      where: { userid: user.id },
    })

    const userWithFollowersAndFollowing: UserWithFollowersAndFollowing = {
      ...user.get(),
      followersCount,
      followingCount,
    }

    return res.json(userWithFollowersAndFollowing)
  },

  async create(req: Request, res: Response) {
    const { userName } = req.body

    if (!userName || userName.length < 3) {
      throw new AppError('invalid username on user creation', 403)
    }

    const userAlreadyExists = await User.findOne({
      where: { username: userName },
    })

    if (userAlreadyExists) {
      res.redirect(307, '/users/session')
    } else {
      await User.create({ username: userName })

      res.redirect(307, '/users/session')
    }
  },

  async session(req: Request, res: Response) {
    const { userName } = req.body

    if (!userName) {
      throw new AppError('no username provided to session', 403)
    }

    const user = await User.findOne({
      where: {
        username: userName,
      },
    })

    if (!user) {
      throw new AppError('no user found', 403)
    }

    try {
      // Creating token every time, we can search before creating a new one
      const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1000 years',
      })

      Token.create({ userid: user.id })

      return res.json({ token })
    } catch (error) {
      throw new AppError('error in token creation', 500)
    }
  },

  async update(req: Request, res: Response) {
    const { name, email, localization, username, bio } = req.body

    const userUpdated = {
      name,
      email,
      localization,
      username,
      bio,
      avatar: req.file
        ? `http://${process.env.HOST_IP}:${process.env.HOST_PORT}/images/${req.file.filename}`
        : '',
    }

    try {
      const updateUserOperation = await User.update(
        { ...userUpdated },
        { where: { id: req.user.id }, returning: ['*'] }
      )

      return res.json(updateUserOperation[1][0])
    } catch (error) {
      throw new AppError('an error ocurred in update', 500)
    }
  },
}

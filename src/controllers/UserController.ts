import { Request, Response } from 'express'
import JWT from 'jsonwebtoken'
import Token from '../models/Token.model'
import User from '../models/User.model'
import AppError from '../utils/errors/AppError'

export default {
  async show(req: Request, res: Response) {
    const { userName } = req.params

    if (!userName) {
      throw new AppError('no username sended', 404)
    }

    const user = await User.findOne({ where: { username: userName } })

    return res.json({ ...user })
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
      // Creating token every time, we can search before creating new
      const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1000 years',
      })

      Token.create({ userid: user.id })

      return res.json({ token })
    } catch (error) {
      throw new AppError('error in token creation', 500)
    }
  },
}

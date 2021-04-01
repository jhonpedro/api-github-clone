import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../utils/errors/AppError'

interface TokenPayload {
  id: number
  username: string
}

export default function auth(req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization

  if (!bearerToken) {
    throw new AppError('no token sended for authorization', 404)
  }

  try {
    const token = bearerToken.split(' ')[1]

    const tokenData = verify(token, process.env.JWT_SECRET)

    const { id, username } = tokenData as TokenPayload

    req.user = {
      id,
      username,
    }

    return next()
  } catch (error) {
    throw new AppError('invalid token', 403)
  }
}

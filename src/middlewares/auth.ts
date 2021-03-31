import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'
import AppError from '../utils/errors/AppError'

interface TokenPayload {
  id: number
}

export default function auth(req: Request, res: Response, next: NextFunction) {
  const bearerToken = req.headers.authorization

  if (!bearerToken) {
    throw new AppError('no token sended for authorization', 404)
  }

  try {
    const token = bearerToken.split(' ')[1]

    const tokenData = verify(token, process.env.JWT_SECRET)

    const { id } = tokenData as TokenPayload

    req.user = {
      id,
    }

    next()
  } catch (error) {
    throw new AppError('there is a problem with your token', 404)
  }
}

import { NextFunction, Request, Response } from 'express'
import User from '../models/User.model'
import AppError from '../utils/errors/AppError'

export default async function ensureNameAndEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = await User.findByPk(req.user.id, {
    attributes: ['name', 'email'],
  })

  if (!user.name || !user.email) {
    throw new AppError(
      'you need to have setted an name and email continue',
      403
    )
  }

  next()
}

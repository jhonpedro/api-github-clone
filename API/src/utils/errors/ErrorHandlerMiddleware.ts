import { Request, Response, NextFunction } from 'express'
import AppError from './AppError'

export default function ErrorHandlerMiddleware(
  err,
  req: Request,
  res: Response,
  // eslint-disable-next-line
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message })
  }

  console.log(err)
  return res.status(500).json({
    messsage: 'something went wrong in the server',
    error: err.message,
  })
}

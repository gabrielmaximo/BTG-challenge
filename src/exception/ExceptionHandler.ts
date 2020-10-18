import { Request, Response, NextFunction } from 'express'
import CustomException from './CustomException';

export default (err: Error, req: Request, res: Response, _: NextFunction): Response<CustomException> => {
  if (err instanceof CustomException) {
    return res
      .status(err.statusCode)
      .json({ status: 'error', message: err.message });
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error!' });
}


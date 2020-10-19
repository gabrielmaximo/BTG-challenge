import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/jwt';
import CustomException from '../exception/CustomException';

export default (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new CustomException('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret);

    const { sub } = decoded as TokenDTO;

    req.token = {
      userEmail: sub,
    };

    return next();
  } catch {
    throw new CustomException('Invalid JWT token', 401);
  }
}
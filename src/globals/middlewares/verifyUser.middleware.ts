import { Request, Response, NextFunction } from 'express';
import { BadRequestException } from '../cores/error.core';
import jwt from 'jsonwebtoken';

export async function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  //Get the access token
  const accessToken = req.cookies?.accessToken;
  if (!accessToken) {
    next(new BadRequestException('Please login again'));
    return;
  }
  //verify the accesstoken
  const user = (await jwt.verify(
    accessToken,
    process.env.JWT_SECRET!,
  )) as UserPayload;

  req.currentUser = user;
  next();
}

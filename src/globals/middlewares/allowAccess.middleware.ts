import { NextFunction, Request, Response } from 'express';
import { ForbiddenException } from '../cores/error.core';

export function allowAccess(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.currentUser.role)) {
      next(new ForbiddenException('You dont have permission'));
      return;
    }
    next();
  };
}

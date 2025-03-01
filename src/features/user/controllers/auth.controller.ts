import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import authService from '../services/auth.service';

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    const accessToken = await authService.signup(req.body);

    res.status(StatusCodes.CREATED).json({
      message: 'User signup successfull',
      data: accessToken,
    });
  }

  signIn(req: Request, res: Response, next: NextFunction) {
    res.status(StatusCodes.OK).json({
      message: 'signIn ',
    });
  }
}

export default new AuthController();

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

  async signIn(req: Request, res: Response, next: NextFunction) {
    const accessToken = await authService.signin(req.body);

    res.status(StatusCodes.OK).json({
      message: 'signIn Successfull',
      data: accessToken,
    });
  }
}

export default new AuthController();

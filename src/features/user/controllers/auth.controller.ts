import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    res.status(StatusCodes.OK).json({
      message: 'signup ',
    });
  }

  signIn(req: Request, res: Response, next: NextFunction) {
    res.status(StatusCodes.OK).json({
      message: 'signIn ',
    });
  }
}

export default new AuthController();

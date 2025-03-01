import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import authService from '../services/auth.service';
import { sendTokenToCookie } from '../../../globals/helpers/cookie.helper';
import { access } from 'fs';
import { BadRequestException } from '../../../globals/cores/error.core';
import jwt from 'jsonwebtoken';

class AuthController {
  async signUp(req: Request, res: Response, next: NextFunction) {
    const accessToken = await authService.signup(req.body);

    sendTokenToCookie(res, accessToken);

    res.status(StatusCodes.CREATED).json({
      message: 'User signup successfull',
    });
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    const accessToken = await authService.signin(req.body);
    sendTokenToCookie(res, accessToken);

    res.status(StatusCodes.OK).json({
      message: 'signIn Successfull',
    });
  }

  async getCurrentUser(req: Request, res: Response, next: NextFunction) {
    //extract user details from access token
    res.status(StatusCodes.OK).json({
      message: 'current User Details',
      data: req.currentUser,
    });
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    res.clearCookie('accessToken');
    res.status(StatusCodes.OK).json({
      message: 'User Loggedout succesfully',
    });
  }
}

export default new AuthController();

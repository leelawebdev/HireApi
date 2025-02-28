import { NextFunction, Request, Response } from 'express';
import prisma from '../../../globals/prisma';
import userService from '../services/user.service';
import { StatusCodes } from 'http-status-codes';
import createUserSchema from '../schemas/createuser.schema';

class UserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await userService.getAll();
    res.status(StatusCodes.OK).json({
      message: 'users got succcessfully',
      data: users,
    });
  }

  async create(req: Request, res: Response, nect: NextFunction) {
    const user = await userService.create(req.body);

    res.status(StatusCodes.CREATED).json({
      message: 'User created successfully',
      data: user,
    });
  }
}

export default new UserController();

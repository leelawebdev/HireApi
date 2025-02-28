import { NextFunction, Request, Response } from 'express';
import prisma from '../../../globals/prisma';
import userService from '../services/user.service';

class UserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await userService.getAll();
    res.status(200).json({
      message: 'users got succcessfully',
      data: users,
    });
  }

  async create(req: Request, res: Response, nect: NextFunction) {
    const user = await userService.create(req.body);

    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  }
}

export default new UserController();

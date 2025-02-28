import { NextFunction, Request, Response } from 'express';
import prisma from '../../../globals/prisma';

class UserController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: 'users got succcessfully',
      data: users,
    });
  }

  async create(req: Request, res: Response, nect: NextFunction) {
    console.log(req.body);
    const { name, email, password, role } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });

    res.status(201).json({
      message: 'User created successfully',
      data: user,
    });
  }
}

export default new UserController();

import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

class CandidateProfileController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    res.status(StatusCodes.OK).json({
      message: 'candidate profile details',
    });
  }
}

export default new CandidateProfileController();

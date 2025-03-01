import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import candidateProfileService from '../services/candidate-profile.service';

class CandidateProfileController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    res.status(StatusCodes.OK).json({
      message: 'candidate profile details',
    });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const candidateProfile = await candidateProfileService.create(
      req.body,
      req.currentUser,
    );

    res.status(StatusCodes.OK).json({
      message: 'candidate profile created succesfully',
      data: candidateProfile,
    });
  }
}

export default new CandidateProfileController();

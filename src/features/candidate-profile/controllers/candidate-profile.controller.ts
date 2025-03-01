import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import candidateProfileService from '../services/candidate-profile.service';

class CandidateProfileController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    const candidateProfiles = await candidateProfileService.getAll();
    res.status(StatusCodes.OK).json({
      message: 'candidate profile details',
      data: candidateProfiles,
    });
  }

  async getOne(req: Request, res: Response, next: NextFunction) {
    const candidate = await candidateProfileService.getCandidateById(
      +req.params.id,
    );

    res.status(StatusCodes.OK).json({
      message: 'candidate profile got successfully',
      data: candidate,
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
  async update(req: Request, res: Response, next: NextFunction) {
    const candidate = await candidateProfileService.update(
      +req.params.id,
      req.body,
    );

    res.status(StatusCodes.OK).json({
      message: 'candidate profile updated succesfully',
      data: candidate,
    });
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    await candidateProfileService.remove(+req.params.id);
    res.status(StatusCodes.OK).json({
      message: 'candidate profile Deleted succesfully',
    });
  }
}

export default new CandidateProfileController();

import express from 'express';
import candidateProfileController from '../controllers/candidate-profile.controller';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
import asyncWrapper from 'src/globals/cores/asyncwrapper.core';
import { checkPermission } from 'src/globals/middlewares/checkPermission.middleware';
import { allowAccess } from 'src/globals/middlewares/allowAccess.middleware';
import { verifySchema } from 'src/globals/middlewares/verifySchema.middleware';
import {
  candidateProfileCreateSchema,
  candidateProfileUpdateSchema,
} from '../schemas/candidate-profile.schema';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.get(
  '/',
  verifyUser,
  allowAccess('ADMIN'),
  asyncWrapper(candidateProfileController.getAll),
);
candidateProfileRoutes.get(
  '/:id',
  verifyUser,
  checkPermission('CandidateProfile', 'userId'),
  asyncWrapper(candidateProfileController.getOne),
);
candidateProfileRoutes.post(
  '/',
  verifyUser,
  verifySchema(candidateProfileCreateSchema),
  asyncWrapper(candidateProfileController.create),
);

candidateProfileRoutes.patch(
  '/:id',
  verifyUser,
  checkPermission('CandidateProfile', 'userId'),
  verifySchema(candidateProfileUpdateSchema),
  asyncWrapper(candidateProfileController.update),
);

candidateProfileRoutes.delete(
  '/:id',
  verifyUser,
  checkPermission('CandidateProfile', 'userId'),
  asyncWrapper(candidateProfileController.remove),
);

export default candidateProfileRoutes;

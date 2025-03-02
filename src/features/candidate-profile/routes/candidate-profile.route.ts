import express from 'express';
import candidateProfileController from '../controllers/candidate-profile.controller';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
import asyncWrapper from 'src/globals/cores/asyncwrapper.core';
import { checkPermission } from 'src/globals/middlewares/checkPermission.middleware';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.get(
  '/',
  verifyUser,
  asyncWrapper(candidateProfileController.getAll),
);
candidateProfileRoutes.get(
  '/:id',
  verifyUser,
  checkPermission,
  asyncWrapper(candidateProfileController.getOne),
);
candidateProfileRoutes.post(
  '/',
  verifyUser,
  asyncWrapper(candidateProfileController.create),
);

candidateProfileRoutes.patch(
  '/:id',
  verifyUser,
  checkPermission,
  asyncWrapper(candidateProfileController.update),
);

candidateProfileRoutes.delete(
  '/:id',
  verifyUser,
  checkPermission,
  asyncWrapper(candidateProfileController.remove),
);

export default candidateProfileRoutes;

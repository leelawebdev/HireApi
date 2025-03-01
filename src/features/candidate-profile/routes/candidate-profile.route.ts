import express from 'express';
import candidateProfileController from '../controllers/candidate-profile.controller';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
import asyncWrapper from 'src/globals/cores/asyncwrapper.core';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.get(
  '/',
  verifyUser,
  asyncWrapper(candidateProfileController.getAll),
);
candidateProfileRoutes.get(
  '/:id',
  verifyUser,
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
  asyncWrapper(candidateProfileController.update),
);

export default candidateProfileRoutes;

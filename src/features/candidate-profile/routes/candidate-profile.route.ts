import express from 'express';
import candidateProfileController from '../controllers/candidate-profile.controller';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
import asyncWrapper from 'src/globals/cores/asyncwrapper.core';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.get('/', candidateProfileController.getAll);
candidateProfileRoutes.post(
  '/',
  verifyUser,
  asyncWrapper(candidateProfileController.create),
);

export default candidateProfileRoutes;

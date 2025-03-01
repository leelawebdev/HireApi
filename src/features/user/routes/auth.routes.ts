import express from 'express';
import authController from '../controllers/auth.controller';
import asyncWrapper from '../../../globals/cores/asyncwrapper.core';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
const authRoutes = express.Router();

authRoutes.post('/signup', asyncWrapper(authController.signUp));
authRoutes.post('/signin', asyncWrapper(authController.signIn));
authRoutes.get('/me', verifyUser, asyncWrapper(authController.getCurrentUser));

export default authRoutes;

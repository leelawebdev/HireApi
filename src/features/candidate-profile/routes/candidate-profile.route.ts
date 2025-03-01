import express from 'express';
import candidateProfileController from '../controllers/candidate-profile.controller';

const candidateProfileRoutes = express.Router();

candidateProfileRoutes.get('/', candidateProfileController.getAll);

export default candidateProfileRoutes;

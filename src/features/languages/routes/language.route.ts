import express from 'express';
import languageController from '../controllers/language.controller';
import asyncWrapper from 'src/globals/cores/asyncwrapper.core';
import { verifyUser } from 'src/globals/middlewares/verifyUser.middleware';
import { verifySchema } from 'src/globals/middlewares/verifySchema.middleware';
import { languageSchema } from '../schemas/language.schema';

const languageRouter = express.Router();

languageRouter.get('/', verifyUser, asyncWrapper(languageController.getAll));
languageRouter.get(
  '/:id',
  verifyUser,
  asyncWrapper(languageController.getSingleLanguage),
);
languageRouter.post(
  '/',
  verifyUser,
  verifySchema(languageSchema),
  asyncWrapper(languageController.create),
);
languageRouter.patch(
  '/:id',
  verifyUser,
  verifySchema(languageSchema),
  asyncWrapper(languageController.update),
);
languageRouter.delete(
  '/:id',
  verifyUser,
  asyncWrapper(languageController.delete),
);

export default languageRouter;

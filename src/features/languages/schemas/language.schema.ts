import Joi from 'joi';

export const languageSchema = Joi.object({
  name: Joi.string().required(),
});

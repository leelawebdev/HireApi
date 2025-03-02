import Joi from 'joi';

export const candidateProfileCreateSchema = Joi.object({
  address: Joi.string().required(),
  birth_date: Joi.string().isoDate().required(),
  cv: Joi.string().required(),
  full_name: Joi.string().required(),
  gender: Joi.string().required(),
  phone: Joi.string().required(),
});

export const candidateProfileUpdateSchema = Joi.object({
  address: Joi.string().optional(),
  birth_date: Joi.string().isoDate().optional(),
  cv: Joi.string().optional(),
  full_name: Joi.string().optional(),
  gender: Joi.string().optional(),
  phone: Joi.string().optional(),
});

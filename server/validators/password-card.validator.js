import Joi from 'joi';

export const passwordCardValidator = {
  name: 'passwordCard',
  schema: Joi.object({
    name: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(5).max(20).required(),
    url: Joi.string().uri().required(),
    userName: Joi.string().min(3).max(20).required(),
  }),
};

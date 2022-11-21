import { BadRequestError } from '../errors/bad-request.error.js';
import { NotFoundError } from '../errors/not-found.error.js';

export const httpErrorHandler = (err, res) => {
  if (err instanceof BadRequestError) {
    return res.status(422).send({ errors: err.errors });
  }

  if (err instanceof NotFoundError) {
    return res.status(404).send({ message: err.message });
  }

  return res.status(400);
};

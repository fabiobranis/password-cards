import { Router } from 'express';

import { validateRequest } from '../middlewares/validate-request.middleware.js';
import {
  create, getAll, put, remove,
} from '../controllers/password-card.controller.js';

const router = Router();
const ENDPOINT = '/password-cards';

router.get(ENDPOINT, getAll);

router.post(
  ENDPOINT,
  validateRequest('passwordCard'),
  create,
);

router.put(
  `${ENDPOINT}/:id`,
  validateRequest('passwordCard'),
  put,
);

router.delete(`${ENDPOINT}/:id`, remove);

export default router;

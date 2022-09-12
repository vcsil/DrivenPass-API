import { Router } from 'express';

import { createCard } from '../controllers/cardController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import { cardSchema } from '../schemas/cardSchema';

const cardRouter = Router();

cardRouter.use(checkAuthMiddleware);

cardRouter.post(
  '/card', 
  validateSchema(cardSchema, 'body'), 
  createCard,
);

export default cardRouter;
import { Router } from 'express';

import { createCard, getAllCards, getCard } from '../controllers/cardController';
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

cardRouter.get(
  '/card',
  getAllCards,
);

cardRouter.get(
  '/card/:id',
  getCard,
);



export default cardRouter;
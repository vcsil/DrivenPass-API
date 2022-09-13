import { Router } from 'express';

import { createCard, deleteCard, getAllCards, getCard } from '../controllers/cardController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import { cardSchema } from '../schemas/cardSchema';

const cardRouter = Router();

cardRouter.post(
  '/card', 
  checkAuthMiddleware,
  validateSchema(cardSchema, 'body'), 
  createCard,
);

cardRouter.get(
  '/card',
  checkAuthMiddleware,
  getAllCards,
);

cardRouter.get(
  '/card/:id',
  checkAuthMiddleware,
  getCard,
);
  
cardRouter.delete(
  '/card/:id', 
  checkAuthMiddleware,
  deleteCard,
);

export default cardRouter;
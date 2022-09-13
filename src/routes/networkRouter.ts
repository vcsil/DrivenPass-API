import { Router } from 'express';

import { createNetwork, deleteNetwork, getAllNetworks, getNetwork } from '../controllers/networkController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';
import { networkSchema } from '../schemas/networkSchema';


const networkRouter = Router();

networkRouter.post(
  '/network', 
  checkAuthMiddleware,
  validateSchema(networkSchema, 'body'), 
  createNetwork,
);

networkRouter.get(
  '/network',
  checkAuthMiddleware,
  getAllNetworks,
);

networkRouter.get(
  '/network/:id',
  checkAuthMiddleware,
  getNetwork,
);

networkRouter.delete(
  '/network/:id', 
  checkAuthMiddleware,
  deleteNetwork,
);

export default networkRouter;
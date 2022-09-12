import { Router } from 'express';

import { createNetwork, deleteNetwork, getAllNetworks, getNetwork } from '../controllers/networkController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
// import { checkAuthMiddleware } from '../middlewares/authMiddleware';
import { networkSchema } from '../schemas/networkSchema';


const networkRouter = Router();

// networkRouter.use(checkAuthMiddleware);

networkRouter.post(
  '/network', 
  validateSchema(networkSchema, 'body'), 
  createNetwork,
);

networkRouter.get(
  '/network',
  getAllNetworks,
);

networkRouter.get(
  '/network/:id',
  getNetwork,
);

networkRouter.delete(
  '/network/:id', 
  deleteNetwork,
);

export default networkRouter;
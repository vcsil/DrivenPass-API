import { Router } from 'express';
// import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import { createCredential, deleteCredential, getAllCredentials, getCredential } from '../controllers/credentialController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import credentialSchema from '../schemas/credentialSchema';

const credentialRouter = Router();

// credentialRouter.use(checkAuthMiddleware);
credentialRouter.post(
  '/credential',
  validateSchema(credentialSchema, 'body'),
  createCredential,
);

credentialRouter.get(
  '/credential',
  getAllCredentials,
);

credentialRouter.get(
  '/credential/:id',
  getCredential,
);

credentialRouter.delete(
  '/credential/:id', 
  deleteCredential,
);

export default credentialRouter;
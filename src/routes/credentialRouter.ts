import { Router } from 'express';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import { createCredential, deleteCredential, getAllCredentials, getCredential } from '../controllers/credentialController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import credentialSchema from '../schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.post(
  '/credential',
  checkAuthMiddleware,
  validateSchema(credentialSchema, 'body'),
  createCredential,
);

credentialRouter.get(
  '/credential',
  checkAuthMiddleware,
  getAllCredentials,
);

credentialRouter.get(
  '/credential/:id',
  checkAuthMiddleware,
  getCredential,
);

credentialRouter.delete(
  '/credential/:id', 
  checkAuthMiddleware,
  deleteCredential,
);

export default credentialRouter;
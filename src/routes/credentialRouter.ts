import { Router } from 'express';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import { createCredential } from '../controllers/credentialController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import credentialSchema from '../schemas/credentialSchema';

const credentialRouter = Router();

credentialRouter.use(checkAuthMiddleware);
credentialRouter.post(
  '/credential',
  validateSchema(credentialSchema, 'body'),
  createCredential,
);

export default credentialRouter;
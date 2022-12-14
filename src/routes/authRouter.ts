import { Router } from 'express';

import { signIn, signUp } from '../controllers/authController';
import validateSchema from '../middlewares/schemaValidationMiddleware';
import authSchema from '../schemas/authSchema';

const authRouter = Router();

authRouter.post(
  '/signup',
  validateSchema(authSchema, 'body'),
  signUp,
);

authRouter.post(
  '/signin',
  validateSchema(authSchema, 'body'),
  signIn,
);

export default authRouter;
import { Router } from 'express';
import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import validateSchema from '../middlewares/schemaValidationMiddleware';
import { createSafeNote, deleteSafeNote, getAllSafeNotes, getSafeNote } from '../controllers/safeNoteController';
import safeNoteSchema from '../schemas/safeNoteSchema';

const safeNoteRouter = Router();

safeNoteRouter.post(
  '/safenote',
  checkAuthMiddleware,
  validateSchema(safeNoteSchema, 'body'),
  createSafeNote,
);

safeNoteRouter.get(
  '/safenote',
  checkAuthMiddleware,
  getAllSafeNotes,
);

safeNoteRouter.get(
  '/safenote/:id',
  checkAuthMiddleware,
  getSafeNote,
);

safeNoteRouter.delete(
  '/safenote/:id', 
  checkAuthMiddleware,
  deleteSafeNote,
);

export default safeNoteRouter;
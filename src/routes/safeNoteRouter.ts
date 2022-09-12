import { Router } from 'express';
// import { checkAuthMiddleware } from '../middlewares/authMiddleware';

import validateSchema from '../middlewares/schemaValidationMiddleware';
import { createSafeNote, deleteSafeNote, getAllSafeNotes, getSafeNote } from '../controllers/safeNoteController';
import safeNoteSchema from '../schemas/safeNoteSchema';

const safeNoteRouter = Router();

// safeNoteRouter.use(checkAuthMiddleware);
safeNoteRouter.post(
  '/safenote',
  validateSchema(safeNoteSchema, 'body'),
  createSafeNote,
);

safeNoteRouter.get(
  '/safenote',
  getAllSafeNotes,
);

safeNoteRouter.get(
  '/safenote/:id',
  getSafeNote,
);

safeNoteRouter.delete(
  '/safenote/:id', 
  deleteSafeNote,
);

export default safeNoteRouter;
/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as safeNoteRepository from '../../repositories/safeNoteRepository';
import * as getSafeNoteService from './getSafeNoteService';

export async function deleteSafeNote(user: User, safeNoteId: number) {
  if (isNaN(safeNoteId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }
    
  await getSafeNoteService.getSafeNote(user.id, safeNoteId);

  await safeNoteRepository.deleteSafeNote(safeNoteId);

  return;
}
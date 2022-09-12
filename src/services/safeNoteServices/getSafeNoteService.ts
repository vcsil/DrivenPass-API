/* eslint-disable @typescript-eslint/no-throw-literal */
import { SafeNote } from '@prisma/client';

import * as safeNoteRepository from '../../repositories/safeNoteRepository';

export async function getAllSafeNotes(userId: number): Promise<SafeNote[]> {
  const safeNotes = await safeNoteRepository.getAllSafeNotes(userId);

  return safeNotes;
}

export async function getSafeNote(userId: number, safeNoteId: number): Promise<SafeNote> {
  if (isNaN(safeNoteId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  const safeNote = await safeNoteRepository.getSafeNote(userId, safeNoteId);
  if (!safeNote) throw { code: 'Bad Request', message: "Safe note doesn't exist" };
  
  return safeNote;
}
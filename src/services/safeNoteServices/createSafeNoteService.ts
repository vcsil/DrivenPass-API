/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as safeNoteRepository from '../../repositories/safeNoteRepository';
import { ISafeNoteBasic } from '../../types/safeNoteTypes';


export async function createSafeNote(user: User, safeNote: ISafeNoteBasic) {
  const credentialExists = await safeNoteRepository.getSafeNoteByTitle(user.id, safeNote.title);
  if (credentialExists) throw { code: 'Unauthorized', message: 'Title already in use' };

  
  await safeNoteRepository.insertSafeNote(user.id, safeNote);

  return; 
}
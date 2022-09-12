import { SafeNote } from '@prisma/client';

export type ISafeNoteBasic = Omit<SafeNote, 'id' | 'userId'>;
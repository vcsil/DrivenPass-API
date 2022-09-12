import { SafeNote } from '@prisma/client';

import { ISafeNoteBasic } from '../types/safeNoteTypes';
import { prisma } from '../database/database';

export async function getSafeNoteByTitle(userId: number, title: string): Promise<SafeNote | null> {
  return prisma.safeNote.findFirst({
    where: { userId, title },
  });
}

export async function insertSafeNote(userId: number, safeNote: ISafeNoteBasic) {
  return prisma.safeNote.create({
    data: { ...safeNote, userId },
  });
}

export async function getAllSafeNotes(userId: number): Promise<SafeNote[]> {
  return prisma.safeNote.findMany({
    where: { userId },
  });
}

export async function getSafeNote(userId: number, safeNoteId: number): Promise<SafeNote | null> {
  return prisma.safeNote.findFirst({
    where: {
      userId,
      id: safeNoteId,
    },
  });
}

export async function deleteSafeNote(id: number) {
  return prisma.safeNote.delete({ where: { id } });
}
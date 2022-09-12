import { ICredentialBasic } from 'types/credentialTypes';
import { prisma } from '../database/database';

export async function getCredentialByTitle(userId: number, title: string) {
  return prisma.credential.findFirst({
    where: { userId, title },
  });
}

export async function insertCredential(userId: number, credential: ICredentialBasic) {
  return prisma.credential.create({
    data: { ...credential, userId },
  });
}

export async function getAllCredentials(userId: number) {
  return prisma.credential.findMany({
    where: { userId },
  });
}

export async function getCredential(userId: number, credencialId: number) {
  return prisma.credential.findFirst({
    where: {
      userId,
      id: credencialId,
    },
  });
}

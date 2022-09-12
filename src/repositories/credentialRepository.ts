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
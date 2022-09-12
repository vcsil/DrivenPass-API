import { IEmail, IAuth } from '../types/authTypes';
import { prisma } from '../database/database';
import { User } from '@prisma/client';

export async function findUserByEmail(emailObj: IEmail): Promise<User | null> {
  const { email } = emailObj;
  
  const userData = await prisma.user.findUnique({
    where: { email },
  });

  return userData;
}

export async function insertUser(userData: IAuth) {
  return prisma.user.create({ data: userData });
}

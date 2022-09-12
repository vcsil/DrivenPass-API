import { User } from '@prisma/client';

export type IAuth = Omit<User, 'id'> ;

export type IEmail = Pick<User, 'email'>;

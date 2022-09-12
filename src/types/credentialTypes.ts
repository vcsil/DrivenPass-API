import { Credential } from '@prisma/client';

export type ICredential = Omit<Credential, 'id'>;

export type ICredentialBasic = Omit<Credential, 'id' | 'userId'>;
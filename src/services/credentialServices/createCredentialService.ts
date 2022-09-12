/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';
import { encrypt } from '../../utils/criptrUtils';

import * as credentialRepository from '../../repositories/credentialRepository';
import { ICredentialBasic } from '../../types/credentialTypes';


export async function createCredential(user: User, credential: ICredentialBasic) {
  const credentialExists = await credentialRepository.getCredentialByTitle(user.id, credential.title);
  if (credentialExists) throw { code: 'Unauthorized', message: 'Title already in use' };

  const password = encrypt(credential.password);
  const credentialInfos = { ...credential, password };

  await credentialRepository.insertCredential(user.id, credentialInfos);
  return; 
}
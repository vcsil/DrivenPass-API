/* eslint-disable @typescript-eslint/no-throw-literal */
import { decrypt } from '../../utils/criptrUtils';
import * as credentialRepository from '../../repositories/credentialRepository';

export async function getAllCredentials(userId: number) {
  const credentials = await credentialRepository.getAllCredentials(userId);

  return credentials.map(credential => {
    const { password } = credential;
    return { ...credential, password: decrypt(password) };
  });
}

export async function getCredential(userId: number, credentialId: number) {
  const credential = await credentialRepository.getCredential(userId, credentialId);

  if (!credential) throw { code: 'Bad Request', message: "Credential doesn't exist" };
  
  return {
    ...credential,
    password: decrypt(credential.password),
  };
}
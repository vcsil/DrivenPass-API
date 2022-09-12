import { decrypt } from '../../utils/criptrUtils';
import * as credentialRepository from '../../repositories/credentialRepository';

export async function getAllCredentials(userId: number) {
  const credentials = await credentialRepository.getAll(userId);

  return credentials.map(credential => {
    const { password } = credential;
    return { ...credential, password: decrypt(password) };
  });
}
import * as credentialRepository from '../../repositories/credentialRepository';

export async function deleteCredential(credentialId: number) {
  
  await credentialRepository.deleteCredential(credentialId);

  return; 
}
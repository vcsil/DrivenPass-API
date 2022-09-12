import { Credential } from '@prisma/client';
import { Request, Response } from 'express';

import { ICredentialBasic } from '../types/credentialTypes';
import * as createCredentialService from '../services/credentialServices/createCredentialService';
import * as getCredentialService from '../services/credentialServices/getCredentialService';

export async function createCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credential: ICredentialBasic = req.body;

  await createCredentialService.createCredential(user, credential);

  return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const { user } = res.locals;
  const credencials: Credential[] = await getCredentialService.getAllCredentials(user.id);

  res.send(credencials);
}
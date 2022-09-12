/* eslint-disable @typescript-eslint/no-throw-literal */
import { Credential } from '@prisma/client';
import { Request, Response } from 'express';

import { ICredentialBasic } from '../types/credentialTypes';
import * as createCredentialService from '../services/credentialServices/createCredentialService';
import * as getCredentialService from '../services/credentialServices/getCredentialService';
import * as deleteCredentialService from '../services/credentialServices/deleteCredentialService';

export async function createCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credential: ICredentialBasic = req.body;

  await createCredentialService.createCredential(user, credential);

  return res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const { user } = res.locals;
  const credencials: Credential[] = await getCredentialService.getAllCredentials(user.id);

  return res.send(credencials);
}

export async function getCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credentialId = parseInt(req.params.id);

  if (isNaN(credentialId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  const credential = await getCredentialService.getCredential(user.id, credentialId);
  return res.send(credential);
}

export async function deleteCredential(req: Request, res: Response) {
  const { user } = res.locals;

  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  await getCredentialService.getCredential(user.id, credentialId);

  await deleteCredentialService.deleteCredential(credentialId);

  return res.sendStatus(200);
}
import { Request, Response } from 'express';
import { ICredentialBasic } from 'types/credentialTypes';

import * as createCredentialService from '../services/credentialServices/createCredentialService';


export async function createCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credential: ICredentialBasic = req.body;

  await createCredentialService.createCredential(user, credential);

  return res.sendStatus(201);
}
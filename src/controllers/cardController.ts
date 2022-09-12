/* eslint-disable @typescript-eslint/no-throw-literal */
import { Request, Response } from 'express';

import * as createCardService from '../services/cardServices/createCardService';
import { ICardBasic } from '../types/cardTypes';

export async function createCard(req: Request, res: Response) {
  const { user } = res.locals;
  const card: ICardBasic = req.body;

  await createCardService.createCard(user, card);
  
  return res.sendStatus(201); 
}
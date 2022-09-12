/* eslint-disable @typescript-eslint/no-throw-literal */
import { Request, Response } from 'express';

import * as createCardService from '../services/cardServices/createCardService';
import * as getCardService from '../services/cardServices/getCardService';
import { ICardBasic } from '../types/cardTypes';

export async function createCard(req: Request, res: Response) {
  const { user } = res.locals;
  const card: ICardBasic = req.body;

  await createCardService.createCard(user, card);
  
  return res.sendStatus(201); 
}

export async function getAllCards(req: Request, res: Response) {
  const { user } = res.locals;
  const cards = await getCardService.getAllCards(user.id);

  return res.send(cards);
}
  
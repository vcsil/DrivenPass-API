/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as cardRepository from '../../repositories/cardRepository';
import { ICardBasic } from '../../types/cardTypes';
import { encrypt } from '../../utils/criptrUtils';

export async function createCard(user: User, card: ICardBasic) {
  const cardExists = await cardRepository.getCardByTitle(user.id, card.title);
  if (cardExists) throw { code: 'Unauthorized', message: 'Title already in use' };
  
  const cardInfos: ICardBasic = {
    ...card, 
    password: encrypt(card.password),
    securityCode: encrypt(card.securityCode),
  };
  
  await cardRepository.insertCard(user.id, cardInfos);

  return; 
}
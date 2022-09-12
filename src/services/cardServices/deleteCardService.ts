/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as cardRepository from '../../repositories/cardRepository';
import * as getCardService from './getCardService';

export async function deleteCard(user: User, cardId: number) {
  if (isNaN(cardId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  await getCardService.getCard(user.id, cardId);

  await cardRepository.deleteCard(cardId);

  return; 
}
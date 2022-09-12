/* eslint-disable @typescript-eslint/no-throw-literal */
import { decrypt } from '../../utils/criptrUtils';

import * as cardRepository from '../../repositories/cardRepository';
import { Card } from '@prisma/client';

export async function getAllCards(userId: number): Promise<Card[]> {
  const cards = await cardRepository.getAllCards(userId);

  return cards.map(card => {
    return {
      ...card, 
      password: decrypt(card.password),
      securityCode: decrypt(card.securityCode),
    };
  });
}

export async function getCard(userId: number, cardId: number) {
  if (isNaN(cardId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  const card = await cardRepository.getCard(userId, cardId);
  if (!card) throw { code: 'Bad Request', message: "Card doesn't exist" };
  
  return {
    ...card,
    password: decrypt(card.password),
    securityCode: decrypt(card.securityCode),
  };
}
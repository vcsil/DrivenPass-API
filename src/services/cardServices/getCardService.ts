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
  
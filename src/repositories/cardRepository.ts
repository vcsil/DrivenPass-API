import { Card } from '@prisma/client';

import { prisma } from '../database/database';
import { ICardBasic } from '../types/cardTypes';

export async function getCardByTitle(userId: number, title: string): Promise<Card | null> {
  return prisma.card.findFirst({
    where: { userId, title },
  });
}

export async function insertCard(userId: number, card: ICardBasic) {
  return prisma.card.create({
    data: { ...card, userId },
  });
}

export async function getAllCards(userId: number): Promise<Card[]> {
  return prisma.card.findMany({
    where: { userId },
  });
}
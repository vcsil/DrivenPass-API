import { Card } from '@prisma/client';

export type ICardBasic = Omit<Card, 'id' | 'userId'>;
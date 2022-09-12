import joi from 'joi';
import { Card } from '@prisma/client';

export const cardSchema = joi.object<Card>({
  title: joi.string().required(),
  number: joi.string().required(),
  cardName: joi.string().required(),
  securityCode: joi.string().max(3).required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  cardType: joi.string().required(),
});
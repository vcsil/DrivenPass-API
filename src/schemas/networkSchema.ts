import joi from 'joi';
import { INetworkBasic } from '../types/networkTypes';

export const networkSchema = joi.object<INetworkBasic>({
  title: joi.string().required(),
  name: joi.string().required(),
  password: joi.string().required(),
});
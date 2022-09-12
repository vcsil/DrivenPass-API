import joi from 'joi';
import { IAuth } from '../types/authTypes';

const authSchema = joi.object<IAuth>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

export default authSchema;
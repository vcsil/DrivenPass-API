/* eslint-disable @typescript-eslint/no-throw-literal */
import bcrypt from 'bcrypt';

import { IEmail, IAuth } from '../../types/authTypes';
import * as userRepository from '../../repositories/userRepository';

async function checkEmail(emailObj: IEmail) {
  const emailExists = await userRepository.findUserByEmail(emailObj);

  if (emailExists) throw { code: 'Bad Request', message: 'Email already used' };

  return; 
}

function encryptPassword(password: string): string {
  const SALT = 10;
  return bcrypt.hashSync(password, SALT);
}

export async function signup(authObj: IAuth) {
  const { email, password } = authObj;

  await checkEmail({ email });

  const passwordHash: string = encryptPassword(password);

  const userData = { email, password: passwordHash };

  await userRepository.insertUser(userData);

  return;
}
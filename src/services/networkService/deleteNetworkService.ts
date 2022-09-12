/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as getNetworkService from './getNetworkService';
import * as networkRepository from '../../repositories/networkRepository';

export async function deleteNetwork(user: User, networkId: number) {
  if (isNaN(networkId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }

  await getNetworkService.getNetwork(user.id, networkId);

  await networkRepository.deleteNetwork(networkId);

  return;
}
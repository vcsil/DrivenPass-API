/* eslint-disable @typescript-eslint/no-throw-literal */
import { Network } from '@prisma/client';

import { decrypt } from '../../utils/criptrUtils';
import * as networkRepository from '../../repositories/networkRepository';

export async function getAllNetworks(userId: number): Promise<Network[]> {
  const networks = await networkRepository.getAllNetworks(userId);

  return networks.map(network => {
    return { ...network, password: decrypt(network.password) };
  });
}

export async function getNetwork(userId: number, networkId: number): Promise<Network> {
  if (isNaN(networkId)) {
    throw { code: 'Unprocessable entity', message: 'Invalid value' };
  }
  
  const network = await networkRepository.getNetwork(userId, networkId);
  if (!network) throw { code: 'Bad Request', message: "Network doesn't exist" };
  
  return {
    ...network,
    password: decrypt(network.password),
  };
}
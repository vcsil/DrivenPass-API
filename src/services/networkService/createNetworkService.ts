/* eslint-disable @typescript-eslint/no-throw-literal */
import { User } from '@prisma/client';

import * as networkRepository from '../../repositories/networkRepository';
import { INetworkBasic } from '../../types/networkTypes';
import { encrypt } from '../../utils/criptrUtils';

export async function createNetwork(user: User, network: INetworkBasic) {
  const networkInfos = { ...network, password: encrypt(network.password) };
  
  await networkRepository.insertNetwork(user.id, networkInfos);
  
  return; 
}
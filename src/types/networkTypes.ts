import { Network } from '@prisma/client';

export type INetworkBasic = Omit<Network, 'id' | 'userId'>;
import { Network } from '@prisma/client';

import { INetworkBasic } from '../types/networkTypes';
import { prisma } from '../database/database';

export async function getNetworkByTitle(userId: number, title: string): Promise<Network | null> {
  return prisma.network.findFirst({
    where: { userId, title },
  });
}

export async function insertNetwork(userId: number, network: INetworkBasic) {
  return prisma.network.create({
    data: { ...network, userId },
  });
}

export async function getAllNetworks(userId: number): Promise<Network[]> {
  return prisma.network.findMany({
    where: { userId },
  });
}

export async function getNetwork(userId: number, networkId: number): Promise<Network | null> {
  return prisma.network.findFirst({
    where: {
      userId,
      id: networkId,
    },
  });
}

export async function deleteNetwork(id: number) {
  return prisma.network.delete({
    where: { id },
  });
}
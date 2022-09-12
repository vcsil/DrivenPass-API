import { Request, Response } from 'express';

import * as createNetworkService from '../services/networkService/createNetworkService';
import * as getNetworkService from '../services/networkService/getNetworkService';
import * as deleteNetworkService from '../services/networkService/deleteNetworkService';
import { INetworkBasic } from '../types/networkTypes';

export async function createNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const network: INetworkBasic = req.body;
  
  await createNetworkService.createNetwork(user, network);

  return res.sendStatus(201); // created
}

export async function getAllNetworks(req: Request, res: Response) {
  const { user } = res.locals;
  const networks = await getNetworkService.getAllNetworks(user.id);
  
  return res.send(networks);
}

export async function getNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const networkId = parseInt(req.params.id);

  const network = await getNetworkService.getNetwork(user.id, networkId);

  return res.send(network);
}

export async function deleteNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const networkId = parseInt(req.params.id);
  
  await deleteNetworkService.deleteNetwork(user, networkId);

  return res.sendStatus(200);
}
/* eslint-disable @typescript-eslint/no-throw-literal */
import { Request, Response } from 'express';

import * as createSafeNoteService from '../services/safeNoteServices/createSafeNoteService';
import * as deleteSafeNoteService from '../services/safeNoteServices/deleteSafeNoteService';
import * as getSafeNoteService from '../services/safeNoteServices/getSafeNoteService';
import { ISafeNoteBasic } from '../types/safeNoteTypes';

export async function createSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNote: ISafeNoteBasic = req.body;

  await createSafeNoteService.createSafeNote(user, safeNote);
  
  return res.sendStatus(201); 
}

export async function getAllSafeNotes(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNotes = await getSafeNoteService.getAllSafeNotes(user.id);

  return res.send(safeNotes);
}

export async function getSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNoteId = parseInt(req.params.id);

  const safeNote = await getSafeNoteService.getSafeNote(user.id, safeNoteId);
  
  return res.send(safeNote);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNoteId = parseInt(req.params.id);

  await deleteSafeNoteService.deleteSafeNote(user, safeNoteId);

  return res.sendStatus(200);
}
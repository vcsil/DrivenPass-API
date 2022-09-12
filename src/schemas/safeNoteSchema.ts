import joi from 'joi';
import { ISafeNoteBasic } from '../types/safeNoteTypes';

const safeNoteSchema = joi.object<ISafeNoteBasic>({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required(),
});

export default safeNoteSchema;